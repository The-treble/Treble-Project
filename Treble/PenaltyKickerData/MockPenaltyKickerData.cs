using Treble.Models;
using System;
using System.Collections.Generic;

namespace Treble.PenaltyKickerData
{

public class MockPenaltyKickerData : IPenaltyKickerData 
{
//     private List <PenaltyKicker> penaltyKickers = new List <PenaltyKicker>()
//     {
//         new PenaltyKicker()
//         {
//             Id = Guid.NewGuid(),
//             Name = "Kicker One"
//         },
//         new PenaltyKicker()
//         {
//             Id = Guid.NewGuid(),
//             Name = "Kicker Two"
//         }
//     };

    public PenaltyKicker AddPenaltyKicker(PenaltyKicker penaltyKicker)
    {
        throw new NotImplementedException();
    }

    public void DeletePenaltyKicker(PenaltyKicker penaltyKicker)
    {
        throw new NotImplementedException();
    }

    public PenaltyKicker EditPenaltyKicker(PenaltyKicker penaltyKicker)
    {
        throw new NotImplementedException();
    }

    public PenaltyKicker GetPenaltyKicker(Guid id)
    {
        throw new NotImplementedException();
    }

    public List <PenaltyKicker> GetPenaltyKickers()
    {
        throw new NotImplementedException();
    }
 }
}