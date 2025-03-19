using AngularApp.Server.Controllers.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RandomDataController : ControllerBase
    {

        private readonly ILogger<RandomDataController> _logger;

        private static readonly DataDto[] _dataDto =
        [
            new DataDto {
                name = "Fulton Buckley",
                region = "North Island",
                currency = "$19.36",
                country = "Austria",
                numberrange = 0
            },
            new DataDto {
                name = "Indigo Benton",
                region = "Podkarpackie",
                currency = "$45.57",
                country = "India",
                numberrange = 6
            },
            new DataDto{
                name = "Mannix Sargent",
                region = "Agder",
                currency = "$83.46",
                country = "Vietnam",
                numberrange = 2
            },
            new DataDto{
                name = "Shellie Shepard",
                region = "Lower Austria",
                currency = "$68.60",
                country = "China",
                numberrange = 2
            },
            new DataDto{
                name = "Anastasia Fischer",
                region = "Illes Balears",
                currency = "$59.68",
                country = "Costa Rica",
                numberrange = 0
            },
            new DataDto{
                name = "Christine Kramer",
                region = "Ulster",
                currency = "$14.58",
                country = "Singapore",
                numberrange = 6
            },
            new DataDto{
                name = "Zelenia Foreman",
                region = "Huádōng",
                currency = "$50.65",
                country = "Ukraine",
                numberrange = 10
            },
            new DataDto{
                name = "Donovan Mullins",
                region = "Burgenland",
                currency = "$18.49",
                country = "India",
                numberrange = 2
            },
            new DataDto{
                name = "Darrel Williamson",
                region = "West-Vlaanderen",
                currency = "$83.58",
                country = "New Zealand",
                numberrange = 4
            },
            new DataDto{
                name = "Dean Irwin",
                region = "Vestland",
                currency = "$52.49",
                country = "Singapore",
                numberrange = 1
            }
    ];

        public RandomDataController(ILogger<RandomDataController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<DataDto> Get()
        {
            return _dataDto;
        }
    }
}
