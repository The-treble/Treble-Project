using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Treble.data;
using Treble.Models;

namespace Treble.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            LoginModel loginModel = new LoginModel();
            return View(loginModel);
        }
        [HttpPost]
        public IActionResult Index(LoginModel loginModel)
        {
            TestDBContext testDBContext = new TestDBContext();
            var status = testDBContext.UserLoginMasters.Where(m => m.LoginId == loginModel.LoginId && m.Password == loginModel.Password).FirstOrDefault();
            if (status != null)
            {
                ViewBag.Message = "Success full login";
            }
            else
            {
                ViewBag.Message = "Invalid login detail.";
            }
            return View(loginModel);
        }
        [HttpGet]
        public IActionResult Registration()
        {
            LoginModel loginModel = new LoginModel();
            return View(loginModel);
        }
        [HttpPost]
        public IActionResult Registration(LoginModel loginModel)
        {
            try
            {
                TestDBContext testDBContext = new TestDBContext();
                var userRegsistration = new UserLoginMaster()
                {
                    LoginId = loginModel.LoginId,
                    Password = loginModel.Password
                };
                testDBContext.UserLoginMasters.Add(userRegsistration);
                testDBContext.SaveChanges();
                ViewBag.Message = "User account created successfully";
            }
            catch (Exception ex)
            {
                ViewBag.Message = "Error while creating user account";
            }
            return View(loginModel);
        }

    }
}
