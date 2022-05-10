using Treble.Models;
using System;
using System.Collections.Generic;

namespace Treble.PenaltyKickerData
{
    interface IPenaltyKickerData
    { 
        List <PenaltyKicker> GetPenaltyKickers();

        PenaltyKicker GetPenaltyKicker(Guid id);

        PenaltyKicker AddPenaltyKicker(PenaltyKicker penaltyKicker);

        void DeletePenaltyKicker(PenaltyKicker penaltyKicker);

        PenaltyKicker EditPenaltyKicker(PenaltyKicker penaltyKicker);
    }
}
