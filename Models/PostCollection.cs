using System.Collections.Generic;

namespace KongresRodziny2015.Models
{
    public class PostCollection
    {
        public List<Blog> Posts { get; set; }

        public PostCollection()
        {
            this.Posts = new List<Blog>();
        }
    }
}