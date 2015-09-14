using System.Web.Mvc;
using System.Web.WebPages;

namespace KongresRodziny2015.App_Code
{
    public class Helper : HelperPage
    {
        //Workaround - exposes the MVC HtmlHelper instead of the normal helper
        public static new HtmlHelper Html
        {
            get { return ((System.Web.Mvc.WebViewPage)WebPageContext.Current.Page).Html; }
        }
    }
}