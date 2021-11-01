using Microsoft.AspNetCore.Mvc;
using SaintBoolies.Core.IServices;
using SaintBoolies.Shared.Models;
using SaintBoolies.Shared.ViewModels;
using System.Threading.Tasks;

namespace SaintBoolies.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        [Route("AddUser")]
        public async Task<IActionResult> AddUser(User user)
        {
            return Ok(await _userService.Create(user));
        }

        [HttpGet]
        [Route("GetUsers")]
        public IActionResult GetUsers()
        {
            return Ok(_userService.GetAllUsers());
        }

        [HttpPost]
        [Route("Login")]
        public IActionResult Login(UserLoginViewModel user)
        {
            var loggedInUser = _userService.Authenticate(user);

            return Ok(loggedInUser);
        }
    }
}
