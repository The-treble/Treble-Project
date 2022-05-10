using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Treble.PenaltyKickerData;

namespace Treble.Controllers
{
    [ApiController]

    public class PenaltyKickerController : ControllerBase
    {
        private IPenaltyKickerData _penaltyKickerData;

        private PenaltyKickerController(IPenaltyKickerData penaltyKickerData)
        {
            _penaltyKickerData = penaltyKickerData;
        }

    [HttpGet]
    [Route("api/[controller]")]

    public IActionResult GetPenaltyKickers()
    {
        return Ok(_penaltyKickerData.GetPenaltyKickers());
    }

    }
}

