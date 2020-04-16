export const db = {
  regions: [
    {
      id: 0,
      name: "South Bay",
      rWallpfHeightBack: 50, //same
      discountOnPay: 1, //same
      stamping: 350, //same
      gFloor: 2.86, // three is diff 7
      lCostDelta: 0, //three is two
      curvedCurbing: 85, // 1 is 85, rest are 80 three is 90
      drainage: 20, // three is 35
      permitAcq: 550,
      stepsPF: 30,
      straightCurbing: 38,
      rWallpfHeightFront: 50,
      concBlockWallpfHeight: 45,
      twofivepsi: 130,
      threeopsi: 150,
      threefivepsi: 168,
      fouropsi: 190,
      fourfivepsi: 210,
      exposedAgra: 2,
      agraDelivery: 200,
      addiLaborCPH: 50,
      finishLaborMPD: 500,
      finishLaborSQFMPD: 300,
      designerConcBlockWallpfHeight: 20
    },
    {
      id: 1,
      name: "East Bay",
      rWallpfHeightBack: 50,
      discountOnPay: 1,
      stamping: 350,
      gFloor: 2.86,
      lCostDelta: 0,
      curvedCurbing: 80,
      drainage: 20,
      permitAcq: 500,
      stepsPF: 30,
      straightCurbing: 38,
      rWallpfHeightFront: 50,
      concBlockWallpfHeight: 45,
      twofivepsi: 150,
      threeopsi: 150,
      threefivepsi: 168,
      fouropsi: 190,
      fourfivepsi: 210,
      exposedAgra: 2,
      agraDelivery: 250,
      addiLaborCPH: 50,
      finishLaborMPD: 500,
      finishLaborSQFMPD: 300,
      designerConcBlockWallpfHeight: 18
    },
    {
      id: 2,
      name: "North Bay",
      rWallpfHeightBack: 50,
      discountOnPay: 1,
      stamping: 350,
      gFloor: 7,
      lCostDelta: 2,
      curvedCurbing: 90,
      drainage: 35,
      permitAcq: 500,
      stepsPF: 30,
      straightCurbing: 38,
      rWallpfHeightFront: 50,
      concBlockWallpfHeight: 45,
      twofivepsi: 150,
      threeopsi: 150,
      threefivepsi: 168,
      fouropsi: 190,
      fourfivepsi: 210,
      exposedAgra: 4,
      agraDelivery: 400,
      addiLaborCPH: 50,
      finishLaborMPD: 500,
      finishLaborSQFMPD: 300,
      designerConcBlockWallpfHeight: 25
    },
    {
      id: 3,
      name: "Sacramento",
      rWallpfHeightBack: 50,
      discountOnPay: 1,
      stamping: 350,
      gFloor: 2.86,
      lCostDelta: 0,
      curvedCurbing: 80,
      drainage: 20,
      permitAcq: 500,
      stepsPF: 30,
      straightCurbing: 38,
      rWallpfHeightFront: 50,
      concBlockWallpfHeight: 45,
      twofivepsi: 150,
      threeopsi: 150,
      threefivepsi: 168,
      fouropsi: 190,
      fourfivepsi: 210,
      exposedAgra: 2,
      agraDelivery: 300,
      addiLaborCPH: 50,
      finishLaborMPD: 500,
      finishLaborSQFMPD: 300,
      designerConcBlockWallpfHeight: 18
    },
    {
      id: 4,
      name: "Far East Bay",
      rWallpfHeightBack: 50,
      discountOnPay: 1,
      stamping: 350,
      gFloor: 2.86,
      lCostDelta: 0,
      curvedCurbing: 80,
      drainage: 20,
      permitAcq: 500,
      stepsPF: 30,
      straightCurbing: 38,
      rWallpfHeightFront: 50,
      concBlockWallpfHeight: 45,
      twofivepsi: 150,
      threeopsi: 150,
      threefivepsi: 168,
      fouropsi: 190,
      fourfivepsi: 210,
      exposedAgra: 2,
      agraDelivery: 300,
      addiLaborCPH: 50,
      finishLaborMPD: 500,
      finishLaborSQFMPD: 300,
      designerConcBlockWallpfHeight: 18
    },
    {
      id: 5,
      name: "Far South Bay",
      rWallpfHeightBack: 50,
      discountOnPay: 1,
      stamping: 350,
      gFloor: 2.86,
      lCostDelta: 0,
      curvedCurbing: 80,
      drainage: 20,
      permitAcq: 500,
      stepsPF: 30,
      straightCurbing: 38,
      rWallpfHeightFront: 50,
      concBlockWallpfHeight: 45,
      twofivepsi: 150,
      threeopsi: 150,
      threefivepsi: 168,
      fouropsi: 190,
      fourfivepsi: 210,
      exposedAgra: 2,
      agraDelivery: 400,
      addiLaborCPH: 50,
      finishLaborMPD: 500,
      finishLaborSQFMPD: 300,
      designerConcBlockWallpfHeight: 18
    }
  ],
  zipcodes: [
    {
      id: 1,
      zip: 94002,
      city: "Belmont",
      county: "San Mateo",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 2,
      zip: 94005,
      city: "Brisbane",
      county: "San Mateo",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 3,
      zip: 94010,
      city: "Burlingame",
      county: "San Mateo",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 4,
      zip: 94011,
      city: "Burlingame",
      county: "San Mateo",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 5,
      zip: 94014,
      city: "Daly City",
      county: "San Mateo",
      tier: "Tier 1B",
      addCost: 2,
      region: "South Bay"
    },
    {
      id: 6,
      zip: 94015,
      city: "Daly City",
      county: "San Mateo",
      tier: "Tier 1B",
      addCost: 2,
      region: "South Bay"
    },
    {
      id: 7,
      zip: 94016,
      city: "Daly City",
      county: "San Mateo",
      tier: "Tier 1B",
      addCost: 2,
      region: "South Bay"
    },
    {
      id: 8,
      zip: 94017,
      city: "Daly City",
      county: "San Mateo",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 9,
      zip: 94022,
      city: "Los Altos",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 10,
      zip: 94023,
      city: "Los Altos",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 11,
      zip: 94024,
      city: "Los Altos",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 12,
      zip: 94025,
      city: "Menlo Park",
      county: "San Mateo",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 13,
      zip: 94026,
      city: "Menlo Park",
      county: "San Mateo",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 14,
      zip: 94027,
      city: "Atherton",
      county: "San Mateo",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 15,
      zip: 94028,
      city: "Portola Valley",
      county: "San Mateo",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 16,
      zip: 94030,
      city: "Millbrae",
      county: "San Mateo",
      tier: "Tier 1B",
      addCost: 2,
      region: "South Bay"
    },
    {
      id: 17,
      zip: 94035,
      city: "Mountain View",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 18,
      zip: 94039,
      city: "Mountain View",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 19,
      zip: 94040,
      city: "Mountain View",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 20,
      zip: 94041,
      city: "Mountain View",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 21,
      zip: 94042,
      city: "Mountain View",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 22,
      zip: 94043,
      city: "Mountain View",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 23,
      zip: 94061,
      city: "Redwood City",
      county: "San Mateo",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 24,
      zip: 94062,
      city: "Redwood City",
      county: "San Mateo",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 25,
      zip: 94063,
      city: "Redwood City",
      county: "San Mateo",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 26,
      zip: 94064,
      city: "Redwood City",
      county: "San Mateo",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 27,
      zip: 94065,
      city: "Redwood City",
      county: "San Mateo",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 28,
      zip: 94066,
      city: "San Bruno",
      county: "San Mateo",
      tier: "Tier 1B",
      addCost: 2,
      region: "South Bay"
    },
    {
      id: 29,
      zip: 94070,
      city: "San Carlos",
      county: "San Mateo",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 30,
      zip: 94080,
      city: "South San Francisco",
      county: "San Mateo",
      tier: "Tier 1B",
      addCost: 2,
      region: "South Bay"
    },
    {
      id: 31,
      zip: 94083,
      city: "South San Francisco",
      county: "San Mateo",
      tier: "Tier 1B",
      addCost: 2,
      region: "South Bay"
    },
    {
      id: 32,
      zip: 94085,
      city: "Sunnyvale",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 33,
      zip: 94086,
      city: "Sunnyvale",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 34,
      zip: 94087,
      city: "Sunnyvale",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 35,
      zip: 94088,
      city: "Sunnyvale",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 36,
      zip: 94089,
      city: "Sunnyvale",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 37,
      zip: 94128,
      city: "San Francisco",
      county: "San Mateo",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 38,
      zip: 94203,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 39,
      zip: 94204,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 40,
      zip: 94205,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 41,
      zip: 94206,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 42,
      zip: 94207,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 43,
      zip: 94208,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 44,
      zip: 94209,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 45,
      zip: 94211,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 46,
      zip: 94229,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 47,
      zip: 94230,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 48,
      zip: 94232,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 49,
      zip: 94234,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 50,
      zip: 94235,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 51,
      zip: 94236,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 52,
      zip: 94237,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 53,
      zip: 94239,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 54,
      zip: 94240,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 55,
      zip: 94244,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 56,
      zip: 94245,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 57,
      zip: 94247,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 58,
      zip: 94248,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 59,
      zip: 94249,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 60,
      zip: 94250,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 61,
      zip: 94252,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 62,
      zip: 94254,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 63,
      zip: 94256,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 64,
      zip: 94257,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 65,
      zip: 94258,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 66,
      zip: 94259,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 67,
      zip: 94261,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 68,
      zip: 94262,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 69,
      zip: 94263,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 70,
      zip: 94267,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 71,
      zip: 94268,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 72,
      zip: 94269,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 73,
      zip: 94271,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 74,
      zip: 94273,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 75,
      zip: 94274,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 76,
      zip: 94277,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 77,
      zip: 94278,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 78,
      zip: 94279,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 79,
      zip: 94280,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 80,
      zip: 94282,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 81,
      zip: 94283,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 82,
      zip: 94284,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 83,
      zip: 94285,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 84,
      zip: 94286,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 85,
      zip: 94287,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 86,
      zip: 94288,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 87,
      zip: 94289,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 88,
      zip: 94290,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 89,
      zip: 94291,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 90,
      zip: 94293,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 91,
      zip: 94294,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 92,
      zip: 94295,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 93,
      zip: 94296,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 94,
      zip: 94297,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 95,
      zip: 94298,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 96,
      zip: 94299,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 97,
      zip: 94301,
      city: "Palo Alto",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 98,
      zip: 94302,
      city: "Palo Alto",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 99,
      zip: 94303,
      city: "Palo Alto",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 100,
      zip: 94304,
      city: "Palo Alto",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 101,
      zip: 94305,
      city: "Stanford",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 102,
      zip: 94306,
      city: "Palo Alto",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 103,
      zip: 94309,
      city: "Palo Alto",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 104,
      zip: 94401,
      city: "San Mateo",
      county: "San Mateo",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 105,
      zip: 94402,
      city: "San Mateo",
      county: "San Mateo",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 106,
      zip: 94403,
      city: "San Mateo",
      county: "San Mateo",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 107,
      zip: 94404,
      city: "San Mateo",
      county: "San Mateo",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 108,
      zip: 94497,
      city: "San Mateo",
      county: "San Mateo",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 109,
      zip: 94501,
      city: "Alameda",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 110,
      zip: 94502,
      city: "Alameda",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 111,
      zip: 94503,
      city: "American Canyon",
      county: "Napa",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 112,
      zip: 94506,
      city: "Danville",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 113,
      zip: 94507,
      city: "Alamo",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 114,
      zip: 94509,
      city: "Antioch",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 115,
      zip: 94510,
      city: "Benicia",
      county: "Solano",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 116,
      zip: 94511,
      city: "Bethel Island",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 117,
      zip: 94512,
      city: "Birds Landing",
      county: "Solano",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 118,
      zip: 94513,
      city: "Brentwood",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 119,
      zip: 94514,
      city: "Byron",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 120,
      zip: 94515,
      city: "Calistoga",
      county: "Napa",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 121,
      zip: 94516,
      city: "Canyon",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 122,
      zip: 94517,
      city: "Clayton",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 123,
      zip: 94518,
      city: "Concord",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 124,
      zip: 94519,
      city: "Concord",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 125,
      zip: 94520,
      city: "Concord",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 126,
      zip: 94521,
      city: "Concord",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 127,
      zip: 94522,
      city: "Concord",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 128,
      zip: 94523,
      city: "Pleasant Hill",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 129,
      zip: 94524,
      city: "Concord",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 130,
      zip: 94525,
      city: "Crockett",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 131,
      zip: 94526,
      city: "Danville",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 132,
      zip: 94527,
      city: "Concord",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 133,
      zip: 94528,
      city: "Diablo",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 134,
      zip: 94529,
      city: "Concord",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 135,
      zip: 94530,
      city: "El Cerrito",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 136,
      zip: 94531,
      city: "Antioch",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 137,
      zip: 94533,
      city: "Fairfield",
      county: "Solano",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 138,
      zip: 94534,
      city: "Fairfield",
      county: "Solano",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 139,
      zip: 94535,
      city: "Travis Afb",
      county: "Solano",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 140,
      zip: 94536,
      city: "Fremont",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 141,
      zip: 94537,
      city: "Fremont",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 142,
      zip: 94538,
      city: "Fremont",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 143,
      zip: 94539,
      city: "Fremont",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 144,
      zip: 94540,
      city: "Hayward",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 145,
      zip: 94541,
      city: "Hayward",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 146,
      zip: 94542,
      city: "Hayward",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 147,
      zip: 94543,
      city: "Hayward",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 148,
      zip: 94544,
      city: "Hayward",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 149,
      zip: 94545,
      city: "Hayward",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 150,
      zip: 94546,
      city: "Castro Valley",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 151,
      zip: 94547,
      city: "Hercules",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 152,
      zip: 94548,
      city: "Knightsen",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 153,
      zip: 94549,
      city: "Lafayette",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 154,
      zip: 94550,
      city: "Livermore",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 155,
      zip: 94551,
      city: "Livermore",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 156,
      zip: 94552,
      city: "Castro Valley",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 157,
      zip: 94553,
      city: "Martinez",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 158,
      zip: 94555,
      city: "Fremont",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 159,
      zip: 94556,
      city: "Moraga",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 160,
      zip: 94557,
      city: "Hayward",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 161,
      zip: 94558,
      city: "Napa",
      county: "Napa",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 162,
      zip: 94559,
      city: "Napa",
      county: "Napa",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 163,
      zip: 94560,
      city: "Newark",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 164,
      zip: 94561,
      city: "Oakley",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 165,
      zip: 94562,
      city: "Oakville",
      county: "Napa",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 166,
      zip: 94563,
      city: "Orinda",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 167,
      zip: 94564,
      city: "Pinole",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 168,
      zip: 94565,
      city: "Pittsburg",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 169,
      zip: 94566,
      city: "Pleasanton",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 170,
      zip: 94568,
      city: "Dublin",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 171,
      zip: 94569,
      city: "Port Costa",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 172,
      zip: 94570,
      city: "Moraga",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 173,
      zip: 94571,
      city: "Rio Vista",
      county: "Solano",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 174,
      zip: 94572,
      city: "Rodeo",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 175,
      zip: 94573,
      city: "Rutherford",
      county: "Napa",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 176,
      zip: 94574,
      city: "Saint Helena",
      county: "Napa",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 177,
      zip: 94575,
      city: "Moraga",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 178,
      zip: 94576,
      city: "Deer Park",
      county: "Napa",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 179,
      zip: 94577,
      city: "San Leandro",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 180,
      zip: 94578,
      city: "San Leandro",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 181,
      zip: 94579,
      city: "San Leandro",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 182,
      zip: 94580,
      city: "San Lorenzo",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 183,
      zip: 94581,
      city: "Napa",
      county: "Napa",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 184,
      zip: 94582,
      city: "San Ramon",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 185,
      zip: 94583,
      city: "San Ramon",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 186,
      zip: 94585,
      city: "Suisun City",
      county: "Solano",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 187,
      zip: 94586,
      city: "Sunol",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 188,
      zip: 94587,
      city: "Union City",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 189,
      zip: 94588,
      city: "Pleasanton",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 190,
      zip: 94589,
      city: "Vallejo",
      county: "Solano",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 191,
      zip: 94590,
      city: "Vallejo",
      county: "Solano",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 192,
      zip: 94591,
      city: "Vallejo",
      county: "Solano",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 193,
      zip: 94592,
      city: "Vallejo",
      county: "Solano",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 194,
      zip: 94595,
      city: "Walnut Creek",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 195,
      zip: 94596,
      city: "Walnut Creek",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 196,
      zip: 94597,
      city: "Walnut Creek",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 197,
      zip: 94598,
      city: "Walnut Creek",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 198,
      zip: 94599,
      city: "Yountville",
      county: "Napa",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 199,
      zip: 94601,
      city: "Oakland",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 200,
      zip: 94602,
      city: "Oakland",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 201,
      zip: 94603,
      city: "Oakland",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 202,
      zip: 94604,
      city: "Oakland",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 203,
      zip: 94605,
      city: "Oakland",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 204,
      zip: 94606,
      city: "Oakland",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 205,
      zip: 94607,
      city: "Oakland",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 206,
      zip: 94608,
      city: "Emeryville",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 207,
      zip: 94609,
      city: "Oakland",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 208,
      zip: 94610,
      city: "Oakland",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 209,
      zip: 94611,
      city: "Oakland",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 210,
      zip: 94612,
      city: "Oakland",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 211,
      zip: 94613,
      city: "Oakland",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 212,
      zip: 94614,
      city: "Oakland",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 213,
      zip: 94615,
      city: "Oakland",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 214,
      zip: 94617,
      city: "Oakland",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 215,
      zip: 94618,
      city: "Oakland",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 216,
      zip: 94619,
      city: "Oakland",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 217,
      zip: 94620,
      city: "Piedmont",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 218,
      zip: 94621,
      city: "Oakland",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 219,
      zip: 94622,
      city: "Oakland",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 220,
      zip: 94623,
      city: "Oakland",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 221,
      zip: 94624,
      city: "Oakland",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 222,
      zip: 94649,
      city: "Oakland",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 223,
      zip: 94659,
      city: "Oakland",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 224,
      zip: 94660,
      city: "Oakland",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 225,
      zip: 94661,
      city: "Oakland",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 226,
      zip: 94662,
      city: "Emeryville",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 227,
      zip: 94666,
      city: "Oakland",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 228,
      zip: 94701,
      city: "Berkeley",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 229,
      zip: 94702,
      city: "Berkeley",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 230,
      zip: 94703,
      city: "Berkeley",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 231,
      zip: 94704,
      city: "Berkeley",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 232,
      zip: 94705,
      city: "Berkeley",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 233,
      zip: 94706,
      city: "Albany",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 234,
      zip: 94707,
      city: "Berkeley",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 235,
      zip: 94708,
      city: "Berkeley",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 236,
      zip: 94709,
      city: "Berkeley",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 237,
      zip: 94710,
      city: "Berkeley",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 238,
      zip: 94712,
      city: "Berkeley",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 239,
      zip: 94720,
      city: "Berkeley",
      county: "Alameda",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 240,
      zip: 94801,
      city: "Richmond",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 241,
      zip: 94802,
      city: "Richmond",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 242,
      zip: 94803,
      city: "El Sobrante",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 243,
      zip: 94804,
      city: "Richmond",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 244,
      zip: 94805,
      city: "Richmond",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 245,
      zip: 94806,
      city: "San Pablo",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 246,
      zip: 94807,
      city: "Richmond",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 247,
      zip: 94808,
      city: "Richmond",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 248,
      zip: 94820,
      city: "El Sobrante",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 249,
      zip: 94850,
      city: "Richmond",
      county: "Contra Costa",
      tier: "Tier 2A",
      addCost: 2,
      region: "	East Bay"
    },
    {
      id: 250,
      zip: 94901,
      city: "San Rafael",
      county: "Marin",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 251,
      zip: 94903,
      city: "San Rafael",
      county: "Marin",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 252,
      zip: 94904,
      city: "Greenbrae",
      county: "Marin",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 253,
      zip: 94912,
      city: "San Rafael",
      county: "Marin",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 254,
      zip: 94913,
      city: "San Rafael",
      county: "Marin",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 255,
      zip: 94914,
      city: "Kentfield",
      county: "Marin",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 256,
      zip: 94915,
      city: "San Rafael",
      county: "Marin",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 257,
      zip: 94920,
      city: "Belvedere Tiburon",
      county: "Marin",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 258,
      zip: 94925,
      city: "Corte Madera",
      county: "Marin",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 259,
      zip: 94926,
      city: "Rohnert Park",
      county: "Sonoma",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 260,
      zip: 94927,
      city: "Rohnert Park",
      county: "Sonoma",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 261,
      zip: 94928,
      city: "Rohnert Park",
      county: "Sonoma",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 262,
      zip: 94930,
      city: "Fairfax",
      county: "Marin",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 263,
      zip: 94931,
      city: "Cotati",
      county: "Sonoma",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 264,
      zip: 94933,
      city: "Forest Knolls",
      county: "Marin",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 265,
      zip: 94939,
      city: "Larkspur",
      county: "Marin",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 266,
      zip: 94941,
      city: "Mill Valley",
      county: "Marin",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 267,
      zip: 94942,
      city: "Mill Valley",
      county: "Marin",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 268,
      zip: 94945,
      city: "Novato",
      county: "Marin",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 269,
      zip: 94947,
      city: "Novato",
      county: "Marin",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 270,
      zip: 94948,
      city: "Novato",
      county: "Marin",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 271,
      zip: 94949,
      city: "Novato",
      county: "Marin",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 272,
      zip: 94951,
      city: "Penngrove",
      county: "Sonoma",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 273,
      zip: 94952,
      city: "Petaluma",
      county: "Sonoma",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 274,
      zip: 94953,
      city: "Petaluma",
      county: "Sonoma",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 275,
      zip: 94954,
      city: "Petaluma",
      county: "Sonoma",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 276,
      zip: 94955,
      city: "Petaluma",
      county: "Sonoma",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 277,
      zip: 94957,
      city: "Ross",
      county: "Marin",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 278,
      zip: 94960,
      city: "San Anselmo",
      county: "Marin",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 279,
      zip: 94965,
      city: "Sausalito",
      county: "Marin",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 280,
      zip: 94966,
      city: "Sausalito",
      county: "Marin",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 281,
      zip: 94973,
      city: "Woodacre",
      county: "Marin",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 282,
      zip: 94974,
      city: "San Quentin",
      county: "Marin",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 283,
      zip: 94975,
      city: "Petaluma",
      county: "Sonoma",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 284,
      zip: 94976,
      city: "Corte Madera",
      county: "Marin",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 285,
      zip: 94977,
      city: "Larkspur",
      county: "Marin",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 286,
      zip: 94978,
      city: "Fairfax",
      county: "Marin",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 287,
      zip: 94979,
      city: "San Anselmo",
      county: "Marin",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 288,
      zip: 94998,
      city: "Novato",
      county: "Marin",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 289,
      zip: 94999,
      city: "Petaluma",
      county: "Sonoma",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 290,
      zip: 95001,
      city: "Aptos",
      county: "Santa Cruz",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 291,
      zip: 95002,
      city: "Alviso",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 292,
      zip: 95003,
      city: "Aptos",
      county: "Santa Cruz",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 293,
      zip: 95005,
      city: "Ben Lomond",
      county: "Santa Cruz",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 294,
      zip: 95006,
      city: "Boulder Creek",
      county: "Santa Cruz",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 295,
      zip: 95007,
      city: "Brookdale",
      county: "Santa Cruz",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 296,
      zip: 95008,
      city: "Campbell",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 297,
      zip: 95009,
      city: "Campbell",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 298,
      zip: 95010,
      city: "Capitola",
      county: "Santa Cruz",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 299,
      zip: 95011,
      city: "Campbell",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 300,
      zip: 95013,
      city: "Coyote",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 301,
      zip: 95014,
      city: "Cupertino",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 302,
      zip: 95015,
      city: "Cupertino",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 303,
      zip: 95018,
      city: "Felton",
      county: "Santa Cruz",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 304,
      zip: 95019,
      city: "Freedom",
      county: "Santa Cruz",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 305,
      zip: 95020,
      city: "Gilroy",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 306,
      zip: 95021,
      city: "Gilroy",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 307,
      zip: 95026,
      city: "Holy City",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 308,
      zip: 95030,
      city: "Los Gatos",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 309,
      zip: 95031,
      city: "Los Gatos",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 310,
      zip: 95032,
      city: "Los Gatos",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 311,
      zip: 95033,
      city: "Los Gatos",
      county: "Santa Cruz",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 312,
      zip: 95035,
      city: "Milpitas",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 313,
      zip: 95036,
      city: "Milpitas",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 314,
      zip: 95037,
      city: "Morgan Hill",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 315,
      zip: 95038,
      city: "Morgan Hill",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 316,
      zip: 95041,
      city: "Mount Hermon",
      county: "Santa Cruz",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 317,
      zip: 95042,
      city: "New Almaden",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 318,
      zip: 95044,
      city: "Redwood Estates",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 319,
      zip: 95046,
      city: "San Martin",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 320,
      zip: 95050,
      city: "Santa Clara",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 321,
      zip: 95051,
      city: "Santa Clara",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 322,
      zip: 95052,
      city: "Santa Clara",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 323,
      zip: 95053,
      city: "Santa Clara",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 324,
      zip: 95054,
      city: "Santa Clara",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 325,
      zip: 95055,
      city: "Santa Clara",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 326,
      zip: 95056,
      city: "Santa Clara",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 327,
      zip: 95060,
      city: "Santa Cruz",
      county: "Santa Cruz",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 328,
      zip: 95061,
      city: "Santa Cruz",
      county: "Santa Cruz",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 329,
      zip: 95062,
      city: "Santa Cruz",
      county: "Santa Cruz",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 330,
      zip: 95063,
      city: "Santa Cruz",
      county: "Santa Cruz",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 331,
      zip: 95064,
      city: "Santa Cruz",
      county: "Santa Cruz",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 332,
      zip: 95065,
      city: "Santa Cruz",
      county: "Santa Cruz",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 333,
      zip: 95066,
      city: "Scotts Valley",
      county: "Santa Cruz",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 334,
      zip: 95067,
      city: "Scotts Valley",
      county: "Santa Cruz",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 335,
      zip: 95070,
      city: "Saratoga",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 336,
      zip: 95071,
      city: "Saratoga",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 337,
      zip: 95073,
      city: "Soquel",
      county: "Santa Cruz",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 338,
      zip: 95076,
      city: "Watsonville",
      county: "Santa Cruz",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 339,
      zip: 95077,
      city: "Watsonville",
      county: "Santa Cruz",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 340,
      zip: 95101,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 341,
      zip: 95103,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 342,
      zip: 95106,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 343,
      zip: 95108,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 344,
      zip: 95109,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 345,
      zip: 95110,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 346,
      zip: 95111,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 347,
      zip: 95112,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 348,
      zip: 95113,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 349,
      zip: 95115,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 350,
      zip: 95116,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 351,
      zip: 95117,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 352,
      zip: 95118,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 353,
      zip: 95119,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 354,
      zip: 95120,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 355,
      zip: 95121,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 356,
      zip: 95122,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 357,
      zip: 95123,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 358,
      zip: 95124,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 359,
      zip: 95125,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 360,
      zip: 95126,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 361,
      zip: 95127,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 362,
      zip: 95128,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 363,
      zip: 95129,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 364,
      zip: 95130,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 365,
      zip: 95131,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 366,
      zip: 95132,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 367,
      zip: 95133,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 368,
      zip: 95134,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 369,
      zip: 95135,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 370,
      zip: 95136,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 371,
      zip: 95138,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 372,
      zip: 95139,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 373,
      zip: 95140,
      city: "Mount Hamilton",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 374,
      zip: 95141,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 375,
      zip: 95148,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 376,
      zip: 95150,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 377,
      zip: 95151,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 378,
      zip: 95152,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 379,
      zip: 95153,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 380,
      zip: 95154,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 381,
      zip: 95155,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 382,
      zip: 95156,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 383,
      zip: 95157,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 384,
      zip: 95158,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 385,
      zip: 95159,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 386,
      zip: 95160,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 387,
      zip: 95161,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 388,
      zip: 95164,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 389,
      zip: 95170,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 390,
      zip: 95172,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 391,
      zip: 95173,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 392,
      zip: 95190,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 393,
      zip: 95191,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 394,
      zip: 95192,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 395,
      zip: 95193,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 396,
      zip: 95194,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 397,
      zip: 95196,
      city: "San Jose",
      county: "Santa Clara",
      tier: "Tier 1B",
      addCost: 0,
      region: "South Bay"
    },
    {
      id: 398,
      zip: 95201,
      city: "Stockton",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 399,
      zip: 95202,
      city: "Stockton",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 400,
      zip: 95203,
      city: "Stockton",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 401,
      zip: 95204,
      city: "Stockton",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 402,
      zip: 95205,
      city: "Stockton",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 403,
      zip: 95206,
      city: "Stockton",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 404,
      zip: 95207,
      city: "Stockton",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 405,
      zip: 95208,
      city: "Stockton",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 406,
      zip: 95209,
      city: "Stockton",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 407,
      zip: 95210,
      city: "Stockton",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 408,
      zip: 95211,
      city: "Stockton",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 409,
      zip: 95212,
      city: "Stockton",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 410,
      zip: 95213,
      city: "Stockton",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 411,
      zip: 95214,
      city: "Stockton",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 412,
      zip: 95215,
      city: "Stockton",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 413,
      zip: 95219,
      city: "Stockton",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 414,
      zip: 95231,
      city: "French Camp",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 415,
      zip: 95234,
      city: "Holt",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 416,
      zip: 95237,
      city: "Lockeford",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 417,
      zip: 95240,
      city: "Lodi",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 418,
      zip: 95241,
      city: "Lodi",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 419,
      zip: 95242,
      city: "Lodi",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 420,
      zip: 95253,
      city: "Victor",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 421,
      zip: 95258,
      city: "Woodbridge",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 422,
      zip: 95267,
      city: "Stockton",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 423,
      zip: 95269,
      city: "Stockton",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 424,
      zip: 95296,
      city: "Stockton",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 425,
      zip: 95297,
      city: "Stockton",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 426,
      zip: 95304,
      city: "Tracy",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 427,
      zip: 95307,
      city: "Ceres",
      county: "Stanislaus",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 428,
      zip: 95319,
      city: "Empire",
      county: "Stanislaus",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 429,
      zip: 95326,
      city: "Hughson",
      county: "Stanislaus",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 430,
      zip: 95328,
      city: "Keyes",
      county: "Stanislaus",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 431,
      zip: 95330,
      city: "Lathrop",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 432,
      zip: 95336,
      city: "Manteca",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 433,
      zip: 95337,
      city: "Manteca",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 434,
      zip: 95350,
      city: "Modesto",
      county: "Stanislaus",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 435,
      zip: 95351,
      city: "Modesto",
      county: "Stanislaus",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 436,
      zip: 95352,
      city: "Modesto",
      county: "Stanislaus",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 437,
      zip: 95353,
      city: "Modesto",
      county: "Stanislaus",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 438,
      zip: 95354,
      city: "Modesto",
      county: "Stanislaus",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 439,
      zip: 95355,
      city: "Modesto",
      county: "Stanislaus",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 440,
      zip: 95356,
      city: "Modesto",
      county: "Stanislaus",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 441,
      zip: 95357,
      city: "Modesto",
      county: "Stanislaus",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 442,
      zip: 95358,
      city: "Modesto",
      county: "Stanislaus",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 443,
      zip: 95361,
      city: "Oakdale",
      county: "Stanislaus",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 444,
      zip: 95363,
      city: "Patterson",
      county: "Stanislaus",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 445,
      zip: 95366,
      city: "Ripon",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 446,
      zip: 95367,
      city: "Riverbank",
      county: "Stanislaus",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 447,
      zip: 95368,
      city: "Salida",
      county: "Stanislaus",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 448,
      zip: 95376,
      city: "Tracy",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 449,
      zip: 95377,
      city: "Tracy",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 450,
      zip: 95378,
      city: "Tracy",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 451,
      zip: 95380,
      city: "Turlock",
      county: "Stanislaus",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 452,
      zip: 95381,
      city: "Turlock",
      county: "Stanislaus",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 453,
      zip: 95382,
      city: "Turlock",
      county: "Stanislaus",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 454,
      zip: 95391,
      city: "Tracy",
      county: "San Joaquin",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 455,
      zip: 95397,
      city: "Modesto",
      county: "Stanislaus",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 456,
      zip: 95401,
      city: "Santa Rosa",
      county: "Sonoma",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 457,
      zip: 95402,
      city: "Santa Rosa",
      county: "Sonoma",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 458,
      zip: 95403,
      city: "Santa Rosa",
      county: "Sonoma",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 459,
      zip: 95404,
      city: "Santa Rosa",
      county: "Sonoma",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 460,
      zip: 95405,
      city: "Santa Rosa",
      county: "Sonoma",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 461,
      zip: 95406,
      city: "Santa Rosa",
      county: "Sonoma",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 462,
      zip: 95407,
      city: "Santa Rosa",
      county: "Sonoma",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 463,
      zip: 95409,
      city: "Santa Rosa",
      county: "Sonoma",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 464,
      zip: 95439,
      city: "Fulton",
      county: "Sonoma",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 465,
      zip: 95442,
      city: "Glen Ellen",
      county: "Sonoma",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 466,
      zip: 95444,
      city: "Graton",
      county: "Sonoma",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 467,
      zip: 95448,
      city: "Healdsburg",
      county: "Sonoma",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 468,
      zip: 95452,
      city: "Kenwood",
      county: "Sonoma",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 469,
      zip: 95472,
      city: "Sebastopol",
      county: "Sonoma",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 470,
      zip: 95476,
      city: "Sonoma",
      county: "Sonoma",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 471,
      zip: 95492,
      city: "Windsor",
      county: "Sonoma",
      tier: "Tier 1A",
      addCost: 0,
      region: "	North Bay"
    },
    {
      id: 472,
      zip: 95603,
      city: "Auburn",
      county: "Placer",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 473,
      zip: 95604,
      city: "Auburn",
      county: "Placer",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 474,
      zip: 95605,
      city: "West Sacramento",
      county: "Yolo",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 475,
      zip: 95608,
      city: "Carmichael",
      county: "Sacramento",
      tier: "Tier 3A",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 476,
      zip: 95609,
      city: "Carmichael",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 477,
      zip: 95610,
      city: "Citrus Heights",
      county: "Sacramento",
      tier: "Tier 3A",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 478,
      zip: 95611,
      city: "Citrus Heights",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 479,
      zip: 95612,
      city: "Clarksburg",
      county: "Yolo",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 480,
      zip: 95615,
      city: "Courtland",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 481,
      zip: 95616,
      city: "Davis",
      county: "Yolo",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 482,
      zip: 95617,
      city: "Davis",
      county: "Yolo",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 483,
      zip: 95618,
      city: "Davis",
      county: "Yolo",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 484,
      zip: 95620,
      city: "Dixon",
      county: "Solano",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 485,
      zip: 95621,
      city: "Citrus Heights",
      county: "Sacramento",
      tier: "Tier 3A",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 486,
      zip: 95624,
      city: "Elk Grove",
      county: "Sacramento",
      tier: "Tier 3A",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 487,
      zip: 95625,
      city: "Elmira",
      county: "Solano",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 488,
      zip: 95626,
      city: "Elverta",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 489,
      zip: 95628,
      city: "Fair Oaks",
      county: "Sacramento",
      tier: "Tier 3A",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 490,
      zip: 95630,
      city: "Folsom",
      county: "Sacramento",
      tier: "Tier 3A",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 491,
      zip: 95632,
      city: "Galt",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 492,
      zip: 95638,
      city: "Herald",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 493,
      zip: 95639,
      city: "Hood",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 494,
      zip: 95641,
      city: "Isleton",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 495,
      zip: 95648,
      city: "Lincoln",
      county: "Placer",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 496,
      zip: 95650,
      city: "Loomis",
      county: "Placer",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 497,
      zip: 95652,
      city: "Mcclellan",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 498,
      zip: 95655,
      city: "Mather",
      county: "Sacramento",
      tier: "Tier 3A",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 499,
      zip: 95658,
      city: "Newcastle",
      county: "Placer",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 500,
      zip: 95660,
      city: "North Highlands",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 501,
      zip: 95661,
      city: "Roseville",
      county: "Placer",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 502,
      zip: 95662,
      city: "Orangevale",
      county: "Sacramento",
      tier: "Tier 3A",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 503,
      zip: 95663,
      city: "Penryn",
      county: "Placer",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 504,
      zip: 95670,
      city: "Rancho Cordova",
      county: "Sacramento",
      tier: "Tier 3A",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 505,
      zip: 95671,
      city: "Represa",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 506,
      zip: 95673,
      city: "Rio Linda",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 507,
      zip: 95677,
      city: "Rocklin",
      county: "Placer",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 508,
      zip: 95678,
      city: "Roseville",
      county: "Placer",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 509,
      zip: 95680,
      city: "Ryde",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 510,
      zip: 95683,
      city: "Sloughhouse",
      county: "Sacramento",
      tier: "Tier 3A",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 511,
      zip: 95687,
      city: "Vacaville",
      county: "Solano",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 512,
      zip: 95688,
      city: "Vacaville",
      county: "Solano",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 513,
      zip: 95690,
      city: "Walnut Grove",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 514,
      zip: 95691,
      city: "West Sacramento",
      county: "Yolo",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 515,
      zip: 95693,
      city: "Wilton",
      county: "Sacramento",
      tier: "Tier 3A",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 516,
      zip: 95694,
      city: "Winters",
      county: "Yolo",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 517,
      zip: 95695,
      city: "Woodland",
      county: "Yolo",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 518,
      zip: 95696,
      city: "Vacaville",
      county: "Solano",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 519,
      zip: 95697,
      city: "Yolo",
      county: "Yolo",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 520,
      zip: 95741,
      city: "Rancho Cordova",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 521,
      zip: 95742,
      city: "Rancho Cordova",
      county: "Sacramento",
      tier: "Tier 3A",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 522,
      zip: 95746,
      city: "Granite Bay",
      county: "Placer",
      tier: "Tier 3A",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 523,
      zip: 95747,
      city: "Roseville",
      county: "Placer",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 524,
      zip: 95757,
      city: "Elk Grove",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 525,
      zip: 95758,
      city: "Elk Grove",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 526,
      zip: 95759,
      city: "Elk Grove",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 527,
      zip: 95762,
      city: "El Dorado Hills",
      county: "El Dorado",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 528,
      zip: 95763,
      city: "Folsom",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 529,
      zip: 95765,
      city: "Rocklin",
      county: "Placer",
      tier: "Tier 2A",
      addCost: 0,
      region: "	East Bay"
    },
    {
      id: 530,
      zip: 95776,
      city: "Woodland",
      county: "Yolo",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 531,
      zip: 95798,
      city: "West Sacramento",
      county: "Yolo",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 532,
      zip: 95799,
      city: "West Sacramento",
      county: "Yolo",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 533,
      zip: 95812,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 534,
      zip: 95813,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 535,
      zip: 95814,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 536,
      zip: 95815,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 537,
      zip: 95816,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 538,
      zip: 95817,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3A",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 539,
      zip: 95818,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 540,
      zip: 95819,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 541,
      zip: 95820,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3A",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 542,
      zip: 95821,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3A",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 543,
      zip: 95822,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3A",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 544,
      zip: 95823,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3A",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 545,
      zip: 95824,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3A",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 546,
      zip: 95825,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 547,
      zip: 95826,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3A",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 548,
      zip: 95827,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3A",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 549,
      zip: 95828,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3A",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 550,
      zip: 95829,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3A",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 551,
      zip: 95830,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3A",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 552,
      zip: 95831,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 553,
      zip: 95832,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 554,
      zip: 95833,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 555,
      zip: 95834,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 556,
      zip: 95835,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 557,
      zip: 95836,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 558,
      zip: 95837,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 559,
      zip: 95838,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 560,
      zip: 95840,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 561,
      zip: 95841,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 562,
      zip: 95842,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 563,
      zip: 95843,
      city: "Antelope",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 564,
      zip: 95851,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 565,
      zip: 95852,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 566,
      zip: 95853,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 567,
      zip: 95860,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 568,
      zip: 95864,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3A",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 569,
      zip: 95865,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 570,
      zip: 95866,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 571,
      zip: 95867,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 572,
      zip: 95894,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento"
    },
    {
      id: 573,
      zip: 95899,
      city: "Sacramento",
      county: "Sacramento",
      tier: "Tier 3B",
      addCost: 0,
      region: "Sacramento	"
    }
  ],
  concreteArea: [
    {
      id: 1,
      sqf: 0,
      ergpCostss: 0,
      ptype: "",
      permitTotal: 0,
      dsquarefeet: 0,
      dtype: "Concrete",
      demoTotal: 0,
      haulSquareFeet: 0,
      haulTotal: 0,
      excaSquareFeet: 0,
      excaTotal: 0,
      finishType: "Broom",
      finishTypeVal: 0,
      baseDepth: 0,
      btype: "#2 Base Rock",
      bTotal: 0,
      concDepth: 0,
      concType: "3500",
      concVal: 0,
      locCalc: 0,
      garageFloorVal: 0,
      zipPricing: 0,
      deltaCust: 0,
      total: 0,
      totalperSqf: 0,
      permitTotalCon: 0,
      demoContractorTotal: 0,
      excaContractorTotal: 0,
      haulContractorTotal: 0,
      finishTypeValCont: 0,
      bContractorTotal: 0,
      concValCont: 0,
      garageFloorValCont: 0,
      zipPricingContractor: 0,
      delta: 0,
      rtype: '#3 Rebar 12"',
      rebarTotalCont: 0,
      rebarTotal: 0,
      aType: "Concrete Retarder",
      admixTotalCont: 0,
      admixTotal: 0,
      totalCont: 0,
      totalContperSqf: 0
    },
    {
      id: 2,
      sqf: 0,
      ergpCostss: 0,
      ptype: "",
      permitTotal: 0,
      dsquarefeet: 0,
      dtype: "Concrete",
      demoTotal: 0,
      haulSquareFeet: 0,
      haulTotal: 0,
      excaSquareFeet: 0,
      excaTotal: 0,
      finishType: "Broom",
      finishTypeVal: 0,
      baseDepth: 0,
      btype: "#2 Base Rock",
      bTotal: 0,
      concDepth: 0,
      concType: "3500",
      concVal: 0,
      locCalc: 0,
      garageFloorVal: 0,
      zipPricing: 0,
      deltaCust: 0,
      total: 0,
      totalperSqf: 0,
      permitTotalCon: 0,
      demoContractorTotal: 0,
      excaContractorTotal: 0,
      haulContractorTotal: 0,
      finishTypeValCont: 0,
      bContractorTotal: 0,
      concValCont: 0,
      garageFloorValCont: 0,
      zipPricingContractor: 0,
      delta: 0,
      rtype: '#3 Rebar 12"',
      rebarTotalCont: 0,
      rebarTotal: 0,
      aType: "Concrete Retarder",
      admixTotalCont: 0,
      admixTotal: 0,
      totalCont: 0,
      totalContperSqf: 0
    },
    {
      id: 3,
      sqf: 0,
      ergpCostss: 0,
      ptype: "",
      permitTotal: 0,
      dsquarefeet: 0,
      dtype: "Concrete",
      demoTotal: 0,
      haulSquareFeet: 0,
      haulTotal: 0,
      excaSquareFeet: 0,
      excaTotal: 0,
      finishType: "Broom",
      finishTypeVal: 0,
      baseDepth: 0,
      btype: "#2 Base Rock",
      bTotal: 0,
      concDepth: 0,
      concType: "3500",
      concVal: 0,
      locCalc: 0,
      garageFloorVal: 0,
      zipPricing: 0,
      deltaCust: 0,
      total: 0,
      totalperSqf: 0,
      permitTotalCon: 0,
      demoContractorTotal: 0,
      excaContractorTotal: 0,
      haulContractorTotal: 0,
      finishTypeValCont: 0,
      bContractorTotal: 0,
      concValCont: 0,
      garageFloorValCont: 0,
      zipPricingContractor: 0,
      delta: 0,
      rtype: '#3 Rebar 12"',
      rebarTotalCont: 0,
      rebarTotal: 0,
      aType: "Concrete Retarder",
      admixTotalCont: 0,
      admixTotal: 0,
      totalCont: 0,
      totalContperSqf: 0
    },
    {
      id: 4,
      sqf: 0,
      ergpCostss: 0,
      ptype: "",
      permitTotal: 0,
      dsquarefeet: 0,
      dtype: "Concrete",
      demoTotal: 0,
      haulSquareFeet: 0,
      haulTotal: 0,
      excaSquareFeet: 0,
      excaTotal: 0,
      finishType: "Broom",
      finishTypeVal: 0,
      baseDepth: 0,
      btype: "#2 Base Rock",
      bTotal: 0,
      concDepth: 0,
      concType: "3500",
      concVal: 0,
      locCalc: 0,
      garageFloorVal: 0,
      zipPricing: 0,
      deltaCust: 0,
      total: 0,
      totalperSqf: 0,
      permitTotalCon: 0,
      demoContractorTotal: 0,
      excaContractorTotal: 0,
      haulContractorTotal: 0,
      finishTypeValCont: 0,
      bContractorTotal: 0,
      concValCont: 0,
      garageFloorValCont: 0,
      zipPricingContractor: 0,
      delta: 0,
      rtype: '#3 Rebar 12"',
      rebarTotalCont: 0,
      rebarTotal: 0,
      aType: "Concrete Retarder",
      admixTotalCont: 0,
      admixTotal: 0,
      totalCont: 0,
      totalContperSqf: 0
    },
    {
      id: 5,
      sqf: 0,
      ergpCostss: 0,
      ptype: "",
      permitTotal: 0,
      dsquarefeet: 0,
      dtype: "Concrete",
      demoTotal: 0,
      haulSquareFeet: 0,
      haulTotal: 0,
      excaSquareFeet: 0,
      excaTotal: 0,
      finishType: "Broom",
      finishTypeVal: 0,
      baseDepth: 0,
      btype: "#2 Base Rock",
      bTotal: 0,
      concDepth: 0,
      concType: "3500",
      concVal: 0,
      locCalc: 0,
      garageFloorVal: 0,
      zipPricing: 0,
      deltaCust: 0,
      total: 0,
      totalperSqf: 0,
      permitTotalCon: 0,
      demoContractorTotal: 0,
      excaContractorTotal: 0,
      haulContractorTotal: 0,
      finishTypeValCont: 0,
      bContractorTotal: 0,
      concValCont: 0,
      garageFloorValCont: 0,
      zipPricingContractor: 0,
      delta: 0,
      rtype: '#3 Rebar 12"',
      rebarTotalCont: 0,
      rebarTotal: 0,
      aType: "Concrete Retarder",
      admixTotalCont: 0,
      admixTotal: 0,
      totalCont: 0,
      totalContperSqf: 0
    },
    {
      id: 6,
      sqf: 0,
      ergpCostss: 0,
      ptype: "",
      permitTotal: 0,
      dsquarefeet: 0,
      dtype: "Concrete",
      demoTotal: 0,
      haulSquareFeet: 0,
      haulTotal: 0,
      excaSquareFeet: 0,
      excaTotal: 0,
      finishType: "Broom",
      finishTypeVal: 0,
      baseDepth: 0,
      btype: "#2 Base Rock",
      bTotal: 0,
      concDepth: 0,
      concType: "3500",
      concVal: 0,
      locCalc: 0,
      garageFloorVal: 0,
      zipPricing: 0,
      deltaCust: 0,
      total: 0,
      totalperSqf: 0,
      permitTotalCon: 0,
      demoContractorTotal: 0,
      excaContractorTotal: 0,
      haulContractorTotal: 0,
      finishTypeValCont: 0,
      bContractorTotal: 0,
      concValCont: 0,
      garageFloorValCont: 0,
      zipPricingContractor: 0,
      delta: 0,
      rtype: '#3 Rebar 12"',
      rebarTotalCont: 0,
      rebarTotal: 0,
      aType: "Concrete Retarder",
      admixTotalCont: 0,
      admixTotal: 0,
      totalCont: 0,
      totalContperSqf: 0
    },
    {
      id: 7,
      sqf: 0,
      ergpCostss: 0,
      ptype: "",
      permitTotal: 0,
      dsquarefeet: 0,
      dtype: "Concrete",
      demoTotal: 0,
      haulSquareFeet: 0,
      haulTotal: 0,
      excaSquareFeet: 0,
      excaTotal: 0,
      finishType: "Broom",
      finishTypeVal: 0,
      baseDepth: 0,
      btype: "#2 Base Rock",
      bTotal: 0,
      concDepth: 0,
      concType: "3500",
      concVal: 0,
      locCalc: 0,
      garageFloorVal: 0,
      zipPricing: 0,
      deltaCust: 0,
      total: 0,
      totalperSqf: 0,
      permitTotalCon: 0,
      demoContractorTotal: 0,
      excaContractorTotal: 0,
      haulContractorTotal: 0,
      finishTypeValCont: 0,
      bContractorTotal: 0,
      concValCont: 0,
      garageFloorValCont: 0,
      zipPricingContractor: 0,
      delta: 0,
      rtype: '#3 Rebar 12"',
      rebarTotalCont: 0,
      rebarTotal: 0,
      aType: "Concrete Retarder",
      admixTotalCont: 0,
      admixTotal: 0,
      totalCont: 0,
      totalContperSqf: 0
    },
    {
      id: 8,
      sqf: 0,
      ergpCostss: 0,
      ptype: "",
      permitTotal: 0,
      dsquarefeet: 0,
      dtype: "Concrete",
      demoTotal: 0,
      haulSquareFeet: 0,
      haulTotal: 0,
      excaSquareFeet: 0,
      excaTotal: 0,
      finishType: "Broom",
      finishTypeVal: 0,
      baseDepth: 0,
      btype: "#2 Base Rock",
      bTotal: 0,
      concDepth: 0,
      concType: "3500",
      concVal: 0,
      locCalc: 0,
      garageFloorVal: 0,
      zipPricing: 0,
      deltaCust: 0,
      total: 0,
      totalperSqf: 0,
      permitTotalCon: 0,
      demoContractorTotal: 0,
      excaContractorTotal: 0,
      haulContractorTotal: 0,
      finishTypeValCont: 0,
      bContractorTotal: 0,
      concValCont: 0,
      garageFloorValCont: 0,
      zipPricingContractor: 0,
      delta: 0,
      rtype: '#3 Rebar 12"',
      rebarTotalCont: 0,
      rebarTotal: 0,
      aType: "Concrete Retarder",
      admixTotalCont: 0,
      admixTotal: 0,
      totalCont: 0,
      totalContperSqf: 0
    },
    {
      id: 9,
      sqf: 0,
      ergpCostss: 0,
      ptype: "",
      permitTotal: 0,
      dsquarefeet: 0,
      dtype: "Concrete",
      demoTotal: 0,
      haulSquareFeet: 0,
      haulTotal: 0,
      excaSquareFeet: 0,
      excaTotal: 0,
      finishType: "Broom",
      finishTypeVal: 0,
      baseDepth: 0,
      btype: "#2 Base Rock",
      bTotal: 0,
      concDepth: 0,
      concType: "3500",
      concVal: 0,
      locCalc: 0,
      garageFloorVal: 0,
      zipPricing: 0,
      deltaCust: 0,
      total: 0,
      totalperSqf: 0,
      permitTotalCon: 0,
      demoContractorTotal: 0,
      excaContractorTotal: 0,
      haulContractorTotal: 0,
      finishTypeValCont: 0,
      bContractorTotal: 0,
      concValCont: 0,
      garageFloorValCont: 0,
      zipPricingContractor: 0,
      delta: 0,
      rtype: '#3 Rebar 12"',
      rebarTotalCont: 0,
      rebarTotal: 0,
      aType: "Concrete Retarder",
      admixTotalCont: 0,
      admixTotal: 0,
      totalCont: 0,
      totalContperSqf: 0
    },
    {
      id: 10,
      sqf: 0,
      ergpCostss: 0,
      ptype: "",
      permitTotal: 0,
      dsquarefeet: 0,
      dtype: "Concrete",
      demoTotal: 0,
      haulSquareFeet: 0,
      haulTotal: 0,
      excaSquareFeet: 0,
      excaTotal: 0,
      finishType: "Broom",
      finishTypeVal: 0,
      baseDepth: 0,
      btype: "#2 Base Rock",
      bTotal: 0,
      concDepth: 0,
      concType: "3500",
      concVal: 0,
      locCalc: 0,
      garageFloorVal: 0,
      zipPricing: 0,
      deltaCust: 0,
      total: 0,
      totalperSqf: 0,
      permitTotalCon: 0,
      demoContractorTotal: 0,
      excaContractorTotal: 0,
      haulContractorTotal: 0,
      finishTypeValCont: 0,
      bContractorTotal: 0,
      concValCont: 0,
      garageFloorValCont: 0,
      zipPricingContractor: 0,
      delta: 0,
      rtype: '#3 Rebar 12"',
      rebarTotalCont: 0,
      rebarTotal: 0,
      aType: "Concrete Retarder",
      admixTotalCont: 0,
      admixTotal: 0,
      totalCont: 0,
      totalContperSqf: 0
    }
  ],
  concreteArea: [
    {
      id: 1,
      sqf: 0,
      ergpCostss: 0,
      ptype: "",
      permitTotal: 0,
      // dsquarefeet: 0,
      // dtype: "Concrete",
      // demoTotal: 0,
      // haulSquareFeet: 0,
      // haulTotal: 0,
      // excaSquareFeet: 0,
      // excaTotal: 0,
      finishType: "Broom",
      finishTypeVal: 0,
      baseDepth: 0,
      btype: "#2 Base Rock",
      bTotal: 0,
      concDepth: 5,
      concType: "3500",
      concVal: 0,
      locCalc: 0,
      garageFloorVal: 0,
      zipPricing: 0,
      deltaCust: 0,
      total: 0,
      totalperSqf: 0,
      permitTotalCon: 0,
      demoContractorTotal: 0,
      excaContractorTotal: 0,
      haulContractorTotal: 0,
      finishTypeValCont: 0,
      bContractorTotal: 0,
      concValCont: 0,
      garageFloorValCont: 0,
      zipPricingContractor: 0,
      delta: 0,
      rtype: '#3 Rebar 12"',
      rebarTotalCont: 0,
      rebarTotal: 0,
      aType: "Concrete Retarder",
      admixTotalCont: 0,
      admixTotal: 0,
      totalCont: 0,
      totalContperSqf: 0
    },
    {
      id: 2,
      sqf: 0,
      ergpCostss: 0,
      ptype: "",
      permitTotal: 0,
      dsquarefeet: 0,
      dtype: "Concrete",
      demoTotal: 0,
      haulSquareFeet: 0,
      haulTotal: 0,
      excaSquareFeet: 0,
      excaTotal: 0,
      finishType: "Broom",
      finishTypeVal: 0,
      baseDepth: 0,
      btype: "#2 Base Rock",
      bTotal: 0,
      concDepth: 0,
      concType: "3500",
      concVal: 0,
      locCalc: 0,
      garageFloorVal: 0,
      zipPricing: 0,
      deltaCust: 0,
      total: 0,
      totalperSqf: 0,
      permitTotalCon: 0,
      demoContractorTotal: 0,
      excaContractorTotal: 0,
      haulContractorTotal: 0,
      finishTypeValCont: 0,
      bContractorTotal: 0,
      concValCont: 0,
      garageFloorValCont: 0,
      zipPricingContractor: 0,
      delta: 0,
      rtype: '#3 Rebar 12"',
      rebarTotalCont: 0,
      rebarTotal: 0,
      aType: "Concrete Retarder",
      admixTotalCont: 0,
      admixTotal: 0,
      totalCont: 0,
      totalContperSqf: 0
    },
    {
      id: 3,
      sqf: 0,
      ergpCostss: 0,
      ptype: "",
      permitTotal: 0,
      dsquarefeet: 0,
      dtype: "Concrete",
      demoTotal: 0,
      haulSquareFeet: 0,
      haulTotal: 0,
      excaSquareFeet: 0,
      excaTotal: 0,
      finishType: "Broom",
      finishTypeVal: 0,
      baseDepth: 0,
      btype: "#2 Base Rock",
      bTotal: 0,
      concDepth: 0,
      concType: "3500",
      concVal: 0,
      locCalc: 0,
      garageFloorVal: 0,
      zipPricing: 0,
      deltaCust: 0,
      total: 0,
      totalperSqf: 0,
      permitTotalCon: 0,
      demoContractorTotal: 0,
      excaContractorTotal: 0,
      haulContractorTotal: 0,
      finishTypeValCont: 0,
      bContractorTotal: 0,
      concValCont: 0,
      garageFloorValCont: 0,
      zipPricingContractor: 0,
      delta: 0,
      rtype: '#3 Rebar 12"',
      rebarTotalCont: 0,
      rebarTotal: 0,
      aType: "Concrete Retarder",
      admixTotalCont: 0,
      admixTotal: 0,
      totalCont: 0,
      totalContperSqf: 0
    },
    {
      id: 4,
      sqf: 0,
      ergpCostss: 0,
      ptype: "",
      permitTotal: 0,
      dsquarefeet: 0,
      dtype: "Concrete",
      demoTotal: 0,
      haulSquareFeet: 0,
      haulTotal: 0,
      excaSquareFeet: 0,
      excaTotal: 0,
      finishType: "Broom",
      finishTypeVal: 0,
      baseDepth: 0,
      btype: "#2 Base Rock",
      bTotal: 0,
      concDepth: 0,
      concType: "3500",
      concVal: 0,
      locCalc: 0,
      garageFloorVal: 0,
      zipPricing: 0,
      deltaCust: 0,
      total: 0,
      totalperSqf: 0,
      permitTotalCon: 0,
      demoContractorTotal: 0,
      excaContractorTotal: 0,
      haulContractorTotal: 0,
      finishTypeValCont: 0,
      bContractorTotal: 0,
      concValCont: 0,
      garageFloorValCont: 0,
      zipPricingContractor: 0,
      delta: 0,
      rtype: '#3 Rebar 12"',
      rebarTotalCont: 0,
      rebarTotal: 0,
      aType: "Concrete Retarder",
      admixTotalCont: 0,
      admixTotal: 0,
      totalCont: 0,
      totalContperSqf: 0
    },
    {
      id: 5,
      sqf: 0,
      ergpCostss: 0,
      ptype: "",
      permitTotal: 0,
      dsquarefeet: 0,
      dtype: "Concrete",
      demoTotal: 0,
      haulSquareFeet: 0,
      haulTotal: 0,
      excaSquareFeet: 0,
      excaTotal: 0,
      finishType: "Broom",
      finishTypeVal: 0,
      baseDepth: 0,
      btype: "#2 Base Rock",
      bTotal: 0,
      concDepth: 0,
      concType: "3500",
      concVal: 0,
      locCalc: 0,
      garageFloorVal: 0,
      zipPricing: 0,
      deltaCust: 0,
      total: 0,
      totalperSqf: 0,
      permitTotalCon: 0,
      demoContractorTotal: 0,
      excaContractorTotal: 0,
      haulContractorTotal: 0,
      finishTypeValCont: 0,
      bContractorTotal: 0,
      concValCont: 0,
      garageFloorValCont: 0,
      zipPricingContractor: 0,
      delta: 0,
      rtype: '#3 Rebar 12"',
      rebarTotalCont: 0,
      rebarTotal: 0,
      aType: "Concrete Retarder",
      admixTotalCont: 0,
      admixTotal: 0,
      totalCont: 0,
      totalContperSqf: 0
    },
    {
      id: 6,
      sqf: 0,
      ergpCostss: 0,
      ptype: "",
      permitTotal: 0,
      dsquarefeet: 0,
      dtype: "Concrete",
      demoTotal: 0,
      haulSquareFeet: 0,
      haulTotal: 0,
      excaSquareFeet: 0,
      excaTotal: 0,
      finishType: "Broom",
      finishTypeVal: 0,
      baseDepth: 0,
      btype: "#2 Base Rock",
      bTotal: 0,
      concDepth: 0,
      concType: "3500",
      concVal: 0,
      locCalc: 0,
      garageFloorVal: 0,
      zipPricing: 0,
      deltaCust: 0,
      total: 0,
      totalperSqf: 0,
      permitTotalCon: 0,
      demoContractorTotal: 0,
      excaContractorTotal: 0,
      haulContractorTotal: 0,
      finishTypeValCont: 0,
      bContractorTotal: 0,
      concValCont: 0,
      garageFloorValCont: 0,
      zipPricingContractor: 0,
      delta: 0,
      rtype: '#3 Rebar 12"',
      rebarTotalCont: 0,
      rebarTotal: 0,
      aType: "Concrete Retarder",
      admixTotalCont: 0,
      admixTotal: 0,
      totalCont: 0,
      totalContperSqf: 0
    },
    {
      id: 7,
      sqf: 0,
      ergpCostss: 0,
      ptype: "",
      permitTotal: 0,
      dsquarefeet: 0,
      dtype: "Concrete",
      demoTotal: 0,
      haulSquareFeet: 0,
      haulTotal: 0,
      excaSquareFeet: 0,
      excaTotal: 0,
      finishType: "Broom",
      finishTypeVal: 0,
      baseDepth: 0,
      btype: "#2 Base Rock",
      bTotal: 0,
      concDepth: 0,
      concType: "3500",
      concVal: 0,
      locCalc: 0,
      garageFloorVal: 0,
      zipPricing: 0,
      deltaCust: 0,
      total: 0,
      totalperSqf: 0,
      permitTotalCon: 0,
      demoContractorTotal: 0,
      excaContractorTotal: 0,
      haulContractorTotal: 0,
      finishTypeValCont: 0,
      bContractorTotal: 0,
      concValCont: 0,
      garageFloorValCont: 0,
      zipPricingContractor: 0,
      delta: 0,
      rtype: '#3 Rebar 12"',
      rebarTotalCont: 0,
      rebarTotal: 0,
      aType: "Concrete Retarder",
      admixTotalCont: 0,
      admixTotal: 0,
      totalCont: 0,
      totalContperSqf: 0
    },
    {
      id: 8,
      sqf: 0,
      ergpCostss: 0,
      ptype: "",
      permitTotal: 0,
      dsquarefeet: 0,
      dtype: "Concrete",
      demoTotal: 0,
      haulSquareFeet: 0,
      haulTotal: 0,
      excaSquareFeet: 0,
      excaTotal: 0,
      finishType: "Broom",
      finishTypeVal: 0,
      baseDepth: 0,
      btype: "#2 Base Rock",
      bTotal: 0,
      concDepth: 0,
      concType: "3500",
      concVal: 0,
      locCalc: 0,
      garageFloorVal: 0,
      zipPricing: 0,
      deltaCust: 0,
      total: 0,
      totalperSqf: 0,
      permitTotalCon: 0,
      demoContractorTotal: 0,
      excaContractorTotal: 0,
      haulContractorTotal: 0,
      finishTypeValCont: 0,
      bContractorTotal: 0,
      concValCont: 0,
      garageFloorValCont: 0,
      zipPricingContractor: 0,
      delta: 0,
      rtype: '#3 Rebar 12"',
      rebarTotalCont: 0,
      rebarTotal: 0,
      aType: "Concrete Retarder",
      admixTotalCont: 0,
      admixTotal: 0,
      totalCont: 0,
      totalContperSqf: 0
    },
    {
      id: 9,
      sqf: 0,
      ergpCostss: 0,
      ptype: "",
      permitTotal: 0,
      dsquarefeet: 0,
      dtype: "Concrete",
      demoTotal: 0,
      haulSquareFeet: 0,
      haulTotal: 0,
      excaSquareFeet: 0,
      excaTotal: 0,
      finishType: "Broom",
      finishTypeVal: 0,
      baseDepth: 0,
      btype: "#2 Base Rock",
      bTotal: 0,
      concDepth: 0,
      concType: "3500",
      concVal: 0,
      locCalc: 0,
      garageFloorVal: 0,
      zipPricing: 0,
      deltaCust: 0,
      total: 0,
      totalperSqf: 0,
      permitTotalCon: 0,
      demoContractorTotal: 0,
      excaContractorTotal: 0,
      haulContractorTotal: 0,
      finishTypeValCont: 0,
      bContractorTotal: 0,
      concValCont: 0,
      garageFloorValCont: 0,
      zipPricingContractor: 0,
      delta: 0,
      rtype: '#3 Rebar 12"',
      rebarTotalCont: 0,
      rebarTotal: 0,
      aType: "Concrete Retarder",
      admixTotalCont: 0,
      admixTotal: 0,
      totalCont: 0,
      totalContperSqf: 0
    },
    {
      id: 10,
      sqf: 0,
      ergpCostss: 0,
      ptype: "",
      permitTotal: 0,
      dsquarefeet: 0,
      dtype: "Concrete",
      demoTotal: 0,
      haulSquareFeet: 0,
      haulTotal: 0,
      excaSquareFeet: 0,
      excaTotal: 0,
      finishType: "Broom",
      finishTypeVal: 0,
      baseDepth: 0,
      btype: "#2 Base Rock",
      bTotal: 0,
      concDepth: 0,
      concType: "3500",
      concVal: 0,
      locCalc: 0,
      garageFloorVal: 0,
      zipPricing: 0,
      deltaCust: 0,
      total: 0,
      totalperSqf: 0,
      permitTotalCon: 0,
      demoContractorTotal: 0,
      excaContractorTotal: 0,
      haulContractorTotal: 0,
      finishTypeValCont: 0,
      bContractorTotal: 0,
      concValCont: 0,
      garageFloorValCont: 0,
      zipPricingContractor: 0,
      delta: 0,
      rtype: '#3 Rebar 12"',
      rebarTotalCont: 0,
      rebarTotal: 0,
      aType: "Concrete Retarder",
      admixTotalCont: 0,
      admixTotal: 0,
      totalCont: 0,
      totalContperSqf: 0
    }
  ],
  baseArea: [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 }
  ],
  base: [
    { id: 0, type: "#2 Base Rock", cost: 40.0 },
    { id: 1, type: "3/4 Minus Crushed Granite", cost: 45.0 },
    { id: 2, type: "5/8 Minus Crushed Granite", cost: 50.0 },
    { id: 3, type: "Concrete Sand", cost: 35.0 },
    { id: 4, type: "DG Grey", cost: 55.0 },
    { id: 5, type: "DG Grey Stabalized", cost: 155.0 },
    { id: 6, type: "DG Gold", cost: 90.0 },
    { id: 7, type: "DG Gold Stabalized", cost: 190.0 }
  ],
  rebar: [
    { id: 0, type: '#3 Rebar 12"OC', cost: 1.85, mult: 1.25 },
    { id: 1, type: '#3 Rebar 16" OC', cost: 1.85, mult: 1 },
    { id: 2, type: '#3 Rebar 18" OC', cost: 1.65, mult: 0.875 },
    { id: 3, type: '#3 Rebar 24" OC', cost: 1.4, mult: 0.75 },
    { id: 4, type: '#4 Rebar 12"OC', cost: 2.25, mult: 1.25 },
    { id: 5, type: '#4 Rebar 16" OC', cost: 2.0, mult: 1 },
    { id: 6, type: '#4 Rebar 18" OC', cost: 1.75, mult: 0.875 },
    { id: 7, type: '#4 Rebar 24" OC', cost: 1.5, mult: 0.75 },
    { id: 8, type: '2"x2" Wire Mesh', cost: 3.5, mult: 1 },
    { id: 9, type: '4"x4"Wire Mesh', cost: 3.0, mult: 1 },
    { id: 10, type: '6"x6" Wire Mesh', cost: 2.5, mult: 1 }
  ],
  admix: [
    { id: 0, type: "Concrete Retarder", cost: 40, lbs: "varies" },
    { id: 1, type: "Concrete Accelerator", cost: 50, lbs: "varies" },
    { id: 2, type: "Polycarboxylate Superplasticizer", cost: 20, lbs: 20 },
    { id: 3, type: "Synthetic Fiber Reinforcement", cost: 65, lbs: 7.5 },
    { id: 4, type: "Helix Steel Fiber Reinforcement", cost: 100, lbs: 25 }
  ],
  psi: [
    { id: 0, type: "2500 PSI", cost: 150 },
    { id: 2, type: "3000 PSI", cost: 150 },
    { id: 3, type: "3500 PSI", cost: 168 },
    { id: 4, type: "4000 PSI", cost: 190 },
    { id: 5, type: "4500 PSI", cost: 210 }
  ],
  stamps: [
    { id: 0, type: "	Yorkshire Cobble", amount: 17, cost: 3 },
    { id: 1, type: "	Pavimento of Paris", amount: 23, cost: 3 },
    { id: 2, type: "	Hammered Sofia Stone", amount: 16, cost: 3 },
    { id: 3, type: "	Stones of Athens", amount: 15, cost: 3 },
    { id: 4, type: "	Rotating Venetian Marble", amount: 15, cost: 3 },
    { id: 5, type: "	Fractured Cyprus Slate", amount: 13, cost: 3 },
    {
      id: 6,
      type: "	Rough Cut Ashlar - Rough Hand Tooled Stones",
      amount: 3,
      cost: 1
    },
    { id: 7, type: "	Rough Cut Ashlar - Blue Stone Slate", amount: 3, cost: 1 },
    { id: 8, type: "	Australian Ashlar Cut Stone", amount: 3, cost: 1 },
    { id: 9, type: "	Random Stone TM-200", amount: 2, cost: 1 },
    { id: 10, type: '	4"x4" Slate Setts', amount: 1, cost: 1 },
    { id: 11, type: "	Mountain Stone Granite Setts", amount: 1, cost: 1 },
    { id: 12, type: '	6" x 6" Granite Setts', amount: 1, cost: 1 },
    { id: 13, type: "	Old English Cobblestone", amount: 1, cost: 1 },
    { id: 14, type: '	12" x 12" Cut Stone', amount: 1, cost: 1 },
    { id: 15, type: '	12" x 12" Heavy Stone', amount: 1, cost: 1 },
    { id: 16, type: '	12" x 12" Utah Stone', amount: 1, cost: 1 },
    { id: 17, type: '	Stone Texture w/ 1/2" Joints', amount: 1, cost: 1 },
    { id: 18, type: "	European Fan", amount: 1, cost: 1 },
    { id: 19, type: "	Yucatan Tile", amount: 1, cost: 1 },
    { id: 20, type: "	Antique Stone", amount: 1, cost: 1 },
    { id: 21, type: "	Basket Weave New Stone Weave Look", amount: 1, cost: 1 },
    { id: 22, type: "	Windsor Cobble", amount: 1, cost: 1 },
    { id: 23, type: "	Mesa Random Stone", amount: 1, cost: 1 },
    { id: 24, type: '	6" x 6" Edinburgh Cobble', amount: 1, cost: 1 },
    { id: 25, type: "	Cheshire Cobble (Smooth Grout)", amount: 1, cost: 1 },
    { id: 26, type: "	London Cobble", amount: 1, cost: 1 },
    { id: 27, type: "	Large Cobble", amount: 1, cost: 1 },
    { id: 28, type: "	Circulos Del Sol", amount: 1, cost: 1 },
    { id: 29, type: '	24" x 24" Keystone Coquina Stone', amount: 1, cost: 1 },
    { id: 30, type: "	San Juan Pavers", amount: 1, cost: 1 },
    { id: 31, type: "	Random Stone FM-700", amount: 3, cost: 1 },
    { id: 32, type: "	Flagstone", amount: 2, cost: 1 },
    { id: 33, type: "	Beverly Hills Random Stone FM-725", amount: 3, cost: 1 },
    { id: 34, type: "	Large Random Stone FM-750", amount: 2, cost: 1 },
    { id: 35, type: "	Lincoln Trail Large Random", amount: 1, cost: 1 },
    { id: 36, type: "	Santa Fe Pebble", amount: 1, cost: 1 },
    { id: 37, type: "	Blue Stone FM-800", amount: 1, cost: 1 },
    { id: 38, type: "	Pennsylvania Cobble – Sanded Joint", amount: 1, cost: 1 },
    { id: 39, type: "	Pennsylvania Cobble – Smooth Joint", amount: 1, cost: 1 },
    { id: 40, type: '	18" x 18" Utah Stone', amount: 1, cost: 1 },
    { id: 41, type: "	Opa Locka Stone", amount: 2, cost: 1 },
    { id: 42, type: '	24" x 24" Yucatan Stone', amount: 1, cost: 1 },
    { id: 43, type: "	Metro Cobble 1", amount: 1, cost: 1 },
    { id: 44, type: "	Metro Cobble 2", amount: 1, cost: 1 },
    { id: 45, type: '	30" x 30" Bushed Stone', amount: 1, cost: 1 },
    { id: 46, type: "	Cut Stone Border", amount: 1, cost: 1 },
    { id: 47, type: "	Cut Stone Double", amount: 1, cost: 1 },
    { id: 48, type: "	Garden Stone", amount: 1, cost: 1 },
    { id: 49, type: "	Patio Stone", amount: 1, cost: 1 },
    { id: 50, type: "	Castle Stone", amount: 2, cost: 1 },
    { id: 51, type: "	English Field Stone", amount: 1, cost: 1 },
    { id: 52, type: "	Luccia Stone", amount: 1, cost: 1 },
    { id: 53, type: "	Roman Cobble", amount: 2, cost: 1 },
    { id: 54, type: "	Walkway Stone", amount: 2, cost: 1 },
    { id: 55, type: "	Tuscany Stone", amount: 3, cost: 1 },
    { id: 56, type: "	Verona Stone", amount: 3, cost: 1 },
    { id: 57, type: "	Large Herringbone", amount: 1, cost: 1 },
    { id: 58, type: '	12" x 12" Blue Stone', amount: 1, cost: 1 },
    { id: 59, type: '	16" x 16" Slate', amount: 1, cost: 1 },
    { id: 60, type: '	12" x 12" Slate', amount: 1, cost: 1 },
    { id: 61, type: '	12" x 12" Slate-Butt Joint', amount: 1, cost: 1 },
    { id: 62, type: '	18" x 18" Slate', amount: 1, cost: 1 },
    { id: 63, type: '	36" Ashlar Cut Slate w/o Insert', amount: 3, cost: 1 },
    { id: 64, type: "	Ashlar Cut Slate", amount: 3, cost: 1 },
    { id: 65, type: "	Aidan Ashlar", amount: 3, cost: 1 },
    { id: 66, type: "	Large Ashlar Cut Slate", amount: 3, cost: 1 },
    { id: 67, type: "	American Ashlar Slate", amount: 2, cost: 1 },
    { id: 68, type: '	48" x 48" Slate Texture with Joint', amount: 1, cost: 1 },
    { id: 69, type: '	24" x 24" Slate', amount: 1, cost: 1 },
    { id: 70, type: '	12" x 12" Slate', amount: 1, cost: 1 },
    { id: 71, type: '	12" x 12" Slate Border', amount: 1, cost: 1 },
    { id: 72, type: "	Slate with Diamond Insert", amount: 1, cost: 1 },
    { id: 73, type: "	Walkway Slate", amount: 3, cost: 1 },
    { id: 74, type: "	California Weave", amount: 1, cost: 1 },
    { id: 75, type: "	Herringbone Slate", amount: 1, cost: 1 },
    { id: 76, type: "	Running Bond Slate", amount: 1, cost: 1 },
    { id: 77, type: "	New England Basket Weave", amount: 1, cost: 1 },
    { id: 78, type: "	Regal Ashlar Blue Stone", amount: 3, cost: 1 },
    { id: 79, type: "	Grand Ashlar", amount: 3, cost: 1 },
    { id: 80, type: '	4" x 12" Brick Border', amount: 1, cost: 1 },
    { id: 81, type: "	Tile Border", amount: 1, cost: 1 },
    { id: 82, type: "	Tile Border Corner", amount: 1, cost: 1 },
    { id: 83, type: "	Brushed Border", amount: 1, cost: 1 },
    { id: 84, type: '	12" x 12" Mexican Tile Border', amount: 1, cost: 1 },
    { id: 85, type: "	Danish Fan", amount: 1, cost: 1 },
    { id: 86, type: '	12" x 12" Mexican Tile', amount: 1, cost: 1 },
    { id: 87, type: "	Teardrop Fan", amount: 1, cost: 1 },
    { id: 88, type: '	Hexagon Smooth with 1/2" Joints', amount: 1, cost: 1 },
    { id: 89, type: "	Herringbone Used Brick", amount: 1, cost: 1 },
    { id: 90, type: "	Running Bond Used Brick", amount: 1, cost: 1 },
    { id: 91, type: "	Running Bond New Brick", amount: 1, cost: 1 },
    { id: 92, type: "	Basket Weave Used Brick", amount: 1, cost: 1 },
    { id: 93, type: "	Herringbone New Brick Sanded Joint", amount: 1, cost: 1 },
    {
      id: 94,
      type: '	12" x 12" Mexican Tile Smooth Texture',
      amount: 1,
      cost: 1
    },
    { id: 95, type: "	Santa Barbara Tile", amount: 1, cost: 1 },
    { id: 96, type: "	Octagon Tile", amount: 1, cost: 1 },
    { id: 97, type: "	Octagon Tile Flower", amount: 1, cost: 1 },
    { id: 98, type: '	Untextured Ashlar with 1/2" V-Joint', amount: 3, cost: 1 },
    { id: 99, type: "	Chateau Ashlar", amount: 3, cost: 1 },
    { id: 100, type: '	3" Cedar Wood Flooring', amount: 1, cost: 1 },
    { id: 101, type: "	Wood Planks", amount: 1, cost: 1 },
    { id: 102, type: "	Cedar Wood Planks", amount: 1, cost: 1 },
    { id: 103, type: '	8" Wood Planks', amount: 3, cost: 1 },
    { id: 104, type: "	Wood Block", amount: 1, cost: 1 },
    { id: 105, type: "	Classic Wood", amount: 1, cost: 1 },
    { id: 106, type: "	Classic Wood with Nail Studs", amount: 1, cost: 1 },
    { id: 107, type: "	Bridges of Madison County", amount: 1, cost: 1 }
  ],
  stain: [
    { id: 0, sType: "Pre-Mixed" },
    { id: 1, sType: "Pre-Mixed" },
    { id: 2, sType: "Pre-Mixed" }
  ],
  stains: [
    { id: 0, type: "Adobe" },
    { id: 1, type: "Baja Red" },
    { id: 2, type: "Bayou" },
    { id: 3, type: "Brick Red" },
    { id: 4, type: "Canyon" },
    { id: 5, type: "Cocoa" },
    { id: 6, type: "Cobblestone" },
    { id: 7, type: "Dark Gray" },
    { id: 8, type: "Dune" },
    { id: 9, type: "Flagstone Brown" },
    { id: 10, type: "	Graphite" },
    { id: 11, type: "	Green Slate" },
    { id: 12, type: "	Harvest Gold" },
    { id: 13, type: "	Kailua" },
    { id: 14, type: "	Light Gray" },
    { id: 15, type: "	Mesa Buff" },
    { id: 16, type: "	Mesquite" },
    { id: 17, type: "	Mocha" },
    { id: 18, type: "	Omaha Tan" },
    { id: 19, type: "	Outback" },
    { id: 20, type: "	Palomino" },
    { id: 21, type: "	Pebble" },
    { id: 22, type: "	Pewter" },
    { id: 23, type: "	Rustic Brown" },
    { id: 24, type: "	Salmon" },
    { id: 25, type: "	San Diego Buff" },
    { id: 26, type: "	Sandstone" },
    { id: 27, type: "	Santa Fe" },
    { id: 28, type: "	Sangria" },
    { id: 29, type: "	Sequoia Sand" },
    { id: 30, type: "	Silver Smoke" },
    { id: 31, type: "	Sierra" },
    { id: 32, type: "	Southern Blush" },
    { id: 33, type: "	Spanish Gold" },
    { id: 34, type: "	Sunset Rose" },
    { id: 35, type: "	Taupe" },
    { id: 36, type: "	Terra Cotta" },
    { id: 37, type: "	Tile Red" },
    { id: 38, type: "	Willow Green" },
    { id: 39, type: "	Yosemite Brown" },
    { id: 40, type: "	Surface Applied - Black" },
    { id: 41, type: "	Surface Applied - Brick Red" },
    { id: 42, type: "	Surface Applied - Buff Tan" },
    { id: 43, type: "	Surface Applied - Cappuccino" },
    { id: 44, type: "	Surface Applied - Chestnut" },
    { id: 45, type: "	Surface Applied - Copper Brown" },
    { id: 46, type: "	Surface Applied - Cream Beige" },
    { id: 47, type: "	Surface Applied - Dark Gray" },
    { id: 48, type: "	Surface Applied - Desert Tan" },
    { id: 49, type: "	Surface Applied - Dover Blue" },
    { id: 50, type: "	Surface Applied - Dusty Rose" },
    { id: 51, type: "	Surface Applied - Federal Yellow" },
    { id: 52, type: "	Surface Applied - French Gray" },
    { id: 53, type: "	Surface Applied - Golden Sandstone" },
    { id: 54, type: "	Surface Applied - Light Gray" },
    { id: 55, type: "	Surface Applied - Medium Gray" },
    { id: 56, type: "	Surface Applied - Nutmeg" },
    { id: 57, type: "	Surface Applied - Oyster White" },
    { id: 58, type: "	Surface Applied - Pecan" },
    { id: 59, type: "	Surface Applied - Pecos Sand" },
    { id: 60, type: "	Surface Applied - Pool Blue" },
    { id: 61, type: "	Surface Applied - Quarry Red" },
    { id: 62, type: "	Surface Applied - Saddle Brown" },
    { id: 63, type: "	Surface Applied - Sandstone" },
    { id: 64, type: "	Surface Applied - Sandy Buff" },
    { id: 65, type: "	Surface Applied - Slate Green" },
    { id: 66, type: "	Surface Applied - Smokey Beige" },
    { id: 67, type: "	Surface Applied - Smokey Blue" },
    { id: 68, type: "	Surface Applied - Stone Gray" },
    { id: 69, type: "	Surface Applied - Summer Beige" },
    { id: 70, type: "	Surface Applied - Sun Buff" },
    { id: 71, type: "	Surface Applied - Sunbaked Clay" },
    { id: 72, type: "	Surface Applied - Terra Cotta" },
    { id: 73, type: "	Surface Applied - Tile Red" },
    { id: 74, type: "	Surface Applied - Walnut" },
    { id: 75, type: "	Surface Applied - White" }
  ],
  hide: [
    {
      id: 0,
      base: [
        {
          styles: {
            display: "none"
          }
        },
        {
          styles: {
            display: "none"
          }
        },
        {
          styles: {
            display: "none"
          }
        },
        {
          styles: {
            display: "none"
          }
        },
        {
          styles: {
            display: "none"
          }
        }
      ]
    },
    {
      id: 1,
      additional: [
        {
          styles: {
            display: "none"
          }
        },
        {
          styles: {
            display: "none"
          }
        },
        {
          styles: {
            display: "none"
          }
        },
        {
          styles: {
            display: "none"
          }
        },
        {
          styles: {
            display: "none"
          }
        }
      ]
    },
    {
      id: 2,
      rebar: [
        {
          styles: {
            display: "none"
          }
        },
        {
          styles: {
            display: "none"
          }
        },
        {
          styles: {
            display: "none"
          }
        },
        {
          styles: {
            display: "none"
          }
        },
        {
          styles: {
            display: "none"
          }
        }
      ]
    },
    {
      id: 3,
      edit: [
        {
          styles: {
            display: "none"
          }
        },
        {
          styles: {
            display: "none"
          }
        },
        {
          styles: {
            display: "none"
          }
        },
        {
          styles: {
            display: "none"
          }
        },
        {
          styles: {
            display: "none"
          }
        }
      ]
    },
    {
      id: 4,
      stamp: [
        {
          styles: {
            display: "none"
          }
        },
        {
          styles: {
            display: "none"
          }
        },
        {
          styles: {
            display: "none"
          }
        },
        {
          styles: {
            display: "none"
          }
        },
        {
          styles: {
            display: "none"
          }
        }
      ]
    },
    {
      id: 5,
      stain: [
        {
          styles: {
            display: "none"
          }
        },
        {
          styles: {
            display: "none"
          }
        },
        {
          styles: {
            display: "none"
          }
        },
        {
          styles: {
            display: "none"
          }
        },
        {
          styles: {
            display: "none"
          }
        }
      ]
    }
  ]
};

export default {
  db
};
