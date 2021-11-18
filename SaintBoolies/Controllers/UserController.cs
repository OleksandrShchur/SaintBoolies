using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SaintBoolies.Core.IServices;
using SaintBoolies.Shared.ViewModels;
using System.Threading.Tasks;

namespace SaintBoolies.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly IUserService _userService;

        public UserController(
            IUserService userService,
            IMapper mapper)
        {
            _userService = userService;
            _mapper = mapper;
        }

        [HttpPost]
        [Route("AddUser")]
        public async Task<IActionResult> AddUser(UserRegistrationViewModel user)
        {
            var result = await _userService.Create(user);

            return Ok(result);
        }

        [HttpGet]
        [Route("GetUsers")]
        public IActionResult GetUsers()
        {
            var result = _userService.GetAllUsers();

            return Ok(result);
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
