const UserAchievement = require("../models/UserAchievement");


const unlockAchievement = async (
  userId,
  badgeName,
  badgeIcon,
  description
) => {

  try {


    console.log(
      "Achievement Check:",
      badgeName
    );


    const exists =
      await UserAchievement.findOne({

        user:userId,

        badgeName,

      });



    if(exists){

      console.log(
        "Already unlocked:",
        badgeName
      );

      return;

    }



    const achievement =
      await UserAchievement.create({

        user:userId,

        badgeName,

        badgeIcon,

        description,

      });



    console.log(
      "Achievement Created:",
      achievement
    );


  }
  catch(error){

    console.log(
      "Achievement Service Error:",
      error.message
    );

  }

};



module.exports={
  unlockAchievement,
};