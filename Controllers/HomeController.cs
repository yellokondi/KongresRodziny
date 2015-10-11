using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KongresRodziny2015.Models;
using KongresRodziny2015.DAL;
using Newtonsoft.Json;
using DropNet;
using DropNet.Models;
using DropNet.Exceptions;
using System.Net;
using System.Net.Mail;

namespace KongresRodziny2015.Controllers
{
	public class HomeController : Controller
	{
		#region DropBox Api
		private static string DropBoxAccessToken = "U_IaYulTQ4YAAAAAAAACrwasLc3NcTLom1FnxpPZ1zE6I5hh_EFMTlTpzYd95TGH";
		private static string DropBoxApiKey="srxkms5181bo1kj";
		private static string DropBoxApiSecret = "9n2000p9utgrwx5";
		//private static string UserSecret = "fMth1ku1lnBRsn3a";
		//private static string UserToken = "XtlFq3zs8dnYK46F";
		private DropNetClient _dropBoxClient = new DropNetClient(DropBoxApiKey, DropBoxApiSecret, DropBoxAccessToken);

		private string DropBoxDownloadBasePath
		{
			get
			{
				return "KONGRES 2015/Download";
			}
		}
		#endregion

		#region View Methods
		//Home page
		public ActionResult Index()
		{
			return View();
		}

		public FileResult Download(string filePath, string fileName)
		{
			byte[] file = _dropBoxClient.GetFile(filePath);
			return File(file, System.Net.Mime.MediaTypeNames.Application.Octet, fileName);
		}

		public ActionResult Downloads()
		{
			List<FileInfo> items = new List<FileInfo>();

			try
			{                   
				MetaData metaData = _dropBoxClient.GetMetaData(DropBoxDownloadBasePath);
				List<MetaData> folderContents = metaData.Contents;
				foreach (MetaData fileInfo in folderContents)
				{
					items.Add(new FileInfo() { FileName = fileInfo.Name, FilePath = fileInfo.Path });
				}
			}
			catch (DropboxException dex)
			{
				string message = dex.Message;
			}
			catch (Exception ex)
			{
				string messag = ex.Message;
			}
			
			return View(items);
		}

		public ActionResult Kontakt()
		{
			ViewBag.Message = "Your contact page.";

			return View();
		}

		public ActionResult Sponsorzy()
		{
			return View();
		}

		public ActionResult PatronatMedialny()
		{
			return View();
		}

		public ActionResult Wspolpraca()
		{
			return View();
		}

		public ActionResult Misja()
		{
			return View();
		}

		public ActionResult Program()
		{
			return View();
		}

		public ActionResult Uczestnicy()
		{
			return View();
		}

		public ActionResult Miejsca()
		{
			return View();
		}

		public ActionResult Modlitwa()
		{
			return View();
		}

		public ActionResult Rekolekcje()
		{
			return View();
		}

		public ActionResult Rejestracja(String labName)
		{
			ViewBag.LabName = labName;
			return View();
		}

		[HttpPost]
		[ValidateAntiForgeryToken]
		public ActionResult Rejestracja(RegistrationForm model)
		{
			if (ModelState.IsValid)
			{
				var body = @"<p>Workshop Title: {0}</p>
<p>First Name: {1}</p>
<p>Last Name: {2}</p>
<p>Email Address: {3}</p>
<p>Telephone Number: {4}</p>";

				var message = new MailMessage();
				message.To.Add(new MailAddress("info@kongresrodzinychicago.org"));
				message.From = new MailAddress("web@kongresrodzinychicago.org");
				message.Subject = String.Format("{0} {1} wants to register for: {2}.", model.FirstName, model.LastName, model.LabName);
				message.Body = String.Format(body, model.LabName, model.FirstName, model.LastName, model.Email, model.Telephone);
				message.IsBodyHtml = true;

				using (var smtp = new SmtpClient())
				{
					var credential = new NetworkCredential
					{
						UserName = "web@kongresrodzinychicago.org",
						Password = "mikonik44"
					};
					smtp.Credentials = credential;
					smtp.Host = "smtp.kongresrodzinychicago.org";
					smtp.Port = 587;
					smtp.EnableSsl = false;
					smtp.Send(message);
					return RedirectToAction("Sent");
				}
			}
			return View(model);
		}

		public ActionResult Sent()
		{
			return View();
		}

		public ActionResult Warsztaty(String labName, String subject, String instructor)
		{
			ViewBag.LabName = labName;
			ViewBag.Subject = subject;
			ViewBag.Instructor = instructor;

			return View();
		}
		public ActionResult Sympozjum()
		{
			return View();
		}

		public ActionResult Konferencje()
		{
			return View();
		}

		public ActionResult Kultura()
		{
			return View();
		}
		
		public ActionResult Artykuly()
		{
			List<Article> articles = SqlFuDAL.FindObjectsByType<Article>();

			return View(articles);
		}
		
		public ActionResult Artykul(int id)
		{
			Article article = SqlFuDAL.FindArticleById(id);

			return View(article);
		}
		#endregion        

		#region JSON Methods

		public String GetJSONParticipants()
		{
			//build json object to populate Participants view:
			//query Participants table to retrieve needed info
			List<Participant> participants = SqlFuDAL.FindObjectsByType<Participant>();

			//perform any needed translation into JSON friendly object here:
			ParticipantCollection participantCol = new ParticipantCollection();
			participantCol.Participants = participants.Where(p => p.IsActive).ToList();
			String json = JsonConvert.SerializeObject(participantCol);

			JsonResult jsonData = new JsonResult { Data = JsonConvert.DeserializeObject(json) };

			//return JSON object back to the view
			return jsonData.Data.ToString();
		}

		public String GetJSONPosts()
		{
			String sql = "SELECT TOP 3 * FROM appadmin.Blogs ORDER BY CreatedOn DESC";

			List<Blog> blogs = SqlFuDAL.FindObjectsByType<Blog>(sql);

			List<Tag> tags = new List<Tag>();
			PostCollection postCol = new PostCollection();

			sql = @"SELECT t.TagName, t.TagURL
FROM appadmin.Tags t
INNER JOIN appadmin.BlogTags bt ON t.ID = bt.TagID
WHERE bt.BlogID = {0}";            

			foreach (Blog blog in blogs)
			{
				String query = String.Format(sql, blog.ID);
				//Build Post:
				tags = SqlFuDAL.FindObjectsByType<Tag>(query);
				blog.Tags = tags;
				//massage CreatedOn property to contain just date part
				blog.CreatedOnDate = blog.CreatedOn.ToShortDateString();
				postCol.Posts.Add(blog);
			}

			String json = JsonConvert.SerializeObject(postCol);
			JsonResult jsonData = new JsonResult { Data = JsonConvert.DeserializeObject(json) };

			return jsonData.Data.ToString();
		}

		/// <summary>
		/// Returns all articles found in database.
		/// </summary>
		/// <returns></returns>
		public String GetJSONArticles()
		{
			List<Article> articles = SqlFuDAL.FindObjectsByType<Article>();
			ArticleCollection articleCol = new ArticleCollection();
			articleCol.Articles = articles;

			String json = JsonConvert.SerializeObject(articleCol);
			JsonResult jsonData = new JsonResult { Data = JsonConvert.DeserializeObject(json) };

			return jsonData.Data.ToString();
		}

		public String GetJSONArticle(int id)
		{
			Article article = SqlFuDAL.FindArticleById(id);

			ArticleCollection articleCol = new ArticleCollection();
			articleCol.Articles = new List<Article>() { article };

			String json = JsonConvert.SerializeObject(articleCol);
			JsonResult jsonData = new JsonResult { Data = JsonConvert.DeserializeObject(json) };

			return jsonData.Data.ToString();
		}

		public String GetJSONConferences()
		{
			List<Conference> conferences = SqlFuDAL.FindObjectsByType<Conference>();
			ConferenceCollection conferenceCol = new ConferenceCollection();
			conferenceCol.Conferences = conferences;

			String json = JsonConvert.SerializeObject(conferenceCol);
			JsonResult jsonData = new JsonResult { Data = JsonConvert.DeserializeObject(json) };

			return jsonData.Data.ToString();
		}

		public String GetJSONCooperators(String type)
		{
			List<Cooperator> cooperators = SqlFuDAL.FindCooperatorsByType(type);
			CooperatorCollection cooperatorCol = new CooperatorCollection();
			cooperatorCol.Cooperators = cooperators;

			String json = JsonConvert.SerializeObject(cooperatorCol);
			JsonResult jsonData = new JsonResult { Data = JsonConvert.DeserializeObject(json) };

			return jsonData.Data.ToString();
		}

		public String GetJSONWorkshop(String labName)
		{
			Workshop workshop = SqlFuDAL.FindWorkshopByLabName(labName);
			String json = JsonConvert.SerializeObject(workshop);
			JsonResult jsonData = new JsonResult { Data = JsonConvert.DeserializeObject(json) };
			return jsonData.Data.ToString();			
		}
		#endregion

		public ActionResult FindBlogs(string tags)
		{
			List<Blog> blogs = new List<Blog>();
			if (!String.IsNullOrEmpty(tags))
			{
				String[] values = tags.Split(new Char[] { ',', ' ' });
				foreach (string value in values)
				{
					if (!String.IsNullOrEmpty(value.Trim()))
					{
						//search the database of blogs for a given tag:

					}
				}
			}
			return View(blogs);
		}
	}
}