const UserAchievement = require("../models/UserAchievement");

const unlockAchievement = async (
  userId,
  badgeName,
  badgeIcon,
  description
) => {

  try {

    await UserAchievement.findOneAndUpdate(
      {
        user: userId,
        badgeName,
      },
      {
        user: userId,
        badgeName,
        badgeIcon,
        description,
      },
      {
        upsert: true,
        new: true,
      }
    );

  } catch (error) {

    console.log(error);

  }

};

module.exports = unlockAchievement;