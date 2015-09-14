using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using KongresRodziny2015.DAL;
using KongresRodziny2015.Models;
using System.Text.RegularExpressions;

namespace KongresRodziny2015
{
    public class DBInitiator
    {
        static String[] loremIpsum5Paragraphs = new String[]{"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis dictum mauris. Vestibulum auctor lobortis viverra. Sed enim sem, consectetur at ligula non, ultricies imperdiet orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam sagittis arcu ipsum, id dictum tortor sodales ac. In hac habitasse platea dictumst. Proin quis tincidunt elit. Ut eleifend enim ex, sed porttitor est hendrerit non. Praesent viverra vehicula sapien, ut pulvinar urna euismod vitae. Nam eu quam nunc. Vivamus dignissim vel est laoreet rutrum. Nunc lectus est, viverra sed consectetur vel, finibus in lacus. Donec pellentesque sit amet elit vel sollicitudin. Vivamus vitae turpis nec nibh vulputate luctus et vitae nisi.</p>",
"<p>Donec eget sagittis massa. Curabitur ut vestibulum sem. Nunc pretium ullamcorper interdum. Maecenas pulvinar rutrum egestas. Cras tincidunt urna augue, ac pretium elit sagittis ut. Vestibulum convallis risus sapien, id iaculis purus porttitor ac. Fusce ipsum metus, convallis egestas nibh nec, venenatis placerat arcu.</p>",
"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla metus urna, consectetur at purus non, faucibus efficitur sem. Donec sollicitudin ut lectus nec hendrerit. Donec vel semper turpis, sed finibus elit. Aliquam erat volutpat. Vestibulum turpis mi, interdum a ullamcorper at, dictum ac lacus. Morbi placerat mollis nulla et consequat. In quis neque magna. Maecenas tempus eros neque. Nam lectus augue, pellentesque eget turpis sit amet, imperdiet sollicitudin elit. Curabitur tincidunt, leo at tincidunt molestie, arcu leo dapibus metus, quis elementum turpis nunc non lectus.</p>",
"<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur nec dui id lectus molestie sodales. Vivamus interdum ac dolor eget sodales. Mauris et ex laoreet massa tincidunt dictum. Nullam sit amet consectetur risus. Phasellus est nulla, consequat sed sapien a, mattis posuere metus.</p>",
"<p>Etiam eget maximus elit. Ut efficitur enim nulla, a laoreet nisl faucibus eget. Nunc aliquet tellus nibh, a auctor lectus bibendum a. Phasellus venenatis auctor elit, elementum pulvinar erat accumsan nec. Sed consequat mi vel diam ornare mollis. Mauris facilisis libero id placerat vehicula. Aenean vel tortor tortor.</p>"};

        static String slug = @"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
Lorem Ipsum.";

        public static void InitializeDatabase()
        {
            SqlFuDAL.CreateTable<Participant>();
            SqlFuDAL.CreateTable<Article>();
            SqlFuDAL.CreateTable<Blog>();
            SqlFuDAL.CreateTable<Tag>();
            SqlFuDAL.CreateBlogTagsLinkerTable();
            //PopulateArticlesWithBlogs();
        }

        private static void PopulateArticlesWithBlogs()
        {
            for (int i = 0; i < 5; i++)
            {
                Article article = new Article();
                article.CreatedOn = DateTime.UtcNow;
                article.FullText = loremIpsum5Paragraphs[i];
                article.ImageURI = "http://lorempixel.com/150/150/";
                article.Title = "Lorem Ipsum Paragraph " + (i + 1);
            
                SqlFuDAL.PopulateArticles(article);
                PopulateBlogsTable(article);
            }            
        }

        private static void PopulateBlogsTable(Article article)
        {
            Blog blog = new Blog();
            blog.Title = article.Title;
            blog.Slug = ScrubHtml(article.FullText).Cut(200) + "...";
            blog.ImageURI = article.ImageURI;
            blog.UserName = "Użytkownik " + article.ID;
            blog.FullArticleURL = "/Home/Artukul?id=" + article.ID;

            SqlFuDAL.PopulateBlogs(blog);
        }

        /// <summary>
        /// Scrubs html tags out of html encoded text.
        /// </summary>
        /// <param name="value">Html encoded text which needs to be cleaned from html tags.</param>
        /// <returns>Returns plain text, html unformatted.</returns>
        private static string ScrubHtml(string value)
        {
            string step1 = Regex.Replace(value, @"<[^>]+>|\[q\]|\[/q\]", "").Trim();
            step1 = HttpUtility.HtmlDecode(step1);
            string step2 = Regex.Replace(step1, @"\s{2,}", " ");
            return step2;
        }
    }
}