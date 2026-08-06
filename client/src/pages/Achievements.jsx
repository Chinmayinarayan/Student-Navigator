import { useEffect, useState } from "react";
import api from "../services/api";


function Achievements() {


  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);



  const allBadges = [

    {
      name:"First Topic Completed",
      icon:"🎉",
      description:
      "Completed your first learning topic.",
      requirement:"Complete 1 topic"
    },


    {
      name:"Quiz Master",
      icon:"📝",
      description:
      "Scored 100% in a quiz.",
      requirement:"Score full marks"
    },


    {
      name:"Coding Champion",
      icon:"💻",
      description:
      "Solved 50 coding problems.",
      requirement:"Solve 50 problems"
    },


    {
      name:"Assignment Hero",
      icon:"📚",
      description:
      "Completed 20 assignments.",
      requirement:"Complete 20 assignments"
    },


    {
      name:"Placement Ready",
      icon:"🚀",
      description:
      "Completed placement preparation milestones.",
      requirement:"Complete career roadmap"
    },


    {
      name:"Excellent Learner",
      icon:"🏆",
      description:
      "Maintained excellent learning performance.",
      requirement:"Maintain high performance"
    }

  ];



  useEffect(() => {
    let isMounted = true;

    const fetchAchievements = async () => {
      try {
        const res = await api.get("/achievements");

        if (!isMounted) return;

        setAchievements(res.data.achievements || []);
      } catch (error) {
        console.error("Achievement Error:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchAchievements();

    return () => {
      isMounted = false;
    };
  }, []);





  const checkUnlocked=(name)=>{

    return achievements.find(
      achievement =>
      achievement.badgeName === name
    );

  };




  if(loading){

    return(

      <div className="p-10 text-center">

        <h2 className="text-xl font-semibold">
          Loading achievements...
        </h2>

      </div>

    );

  }




  const unlockedCount =
    achievements.length;



  const progress =
    Math.round(
      (unlockedCount / allBadges.length)
      *
      100
    );




  return (

    <div className="p-6">


      {/* Hero Section */}

      <div
      className="
      bg-gradient-to-r 
      from-yellow-400 
      via-orange-400 
      to-red-400
      rounded-3xl
      p-8
      text-white
      shadow-lg
      "
      >


        <div className="text-6xl">
          🏆
        </div>


        <h1 className="text-4xl font-bold mt-4">

          Achievement Center

        </h1>


        <p className="mt-2 text-lg">

          Learn. Practice. Achieve. Grow.

        </p>



        <div className="mt-6">

          <p className="font-semibold">

            Badge Progress
            {" "}
            {unlockedCount}/{allBadges.length}

          </p>


          <div
          className="
          bg-white/30
          rounded-full
          h-4
          mt-2
          "
          >

            <div
            className="
            bg-white
            h-4
            rounded-full
            "
            style={{
              width:`${progress}%`
            }}
            >

            </div>

          </div>


          <p className="mt-2">

            {progress}% Completed

          </p>


        </div>


      </div>





      {/* Badge Cards */}


      <div
      className="
      grid
      md:grid-cols-3
      gap-6
      mt-10
      "
      >


      {
        allBadges.map((badge)=>{


          const unlocked =
          checkUnlocked(
            badge.name
          );



          return(

          <div
          key={badge.name}
          className={`
          rounded-2xl
          p-6
          shadow-md
          border
          transition
          hover:scale-105
          ${
            unlocked
            ?
            "bg-green-50 border-green-400"
            :
            "bg-gray-100"
          }
          `}
          >


            <div
            className="
            text-6xl
            "
            >

              {
                unlocked
                ?
                badge.icon
                :
                "🔒"
              }

            </div>



            <h2
            className="
            text-xl
            font-bold
            mt-4
            "
            >

              {badge.name}

            </h2>



            <p
            className="
            text-gray-600
            mt-2
            "
            >

              {badge.description}

            </p>



            <p
            className="
            text-sm
            mt-3
            "
            >

              🎯 Requirement:
              <br/>

              {badge.requirement}

            </p>



            {
              unlocked
              ?

              <div
              className="
              mt-4
              text-green-600
              font-semibold
              "
              >

                ✅ Unlocked


                {
                  unlocked.createdAt &&
                  (
                  <p className="text-xs mt-2">

                    Earned on:
                    {" "}
                    {
                      new Date(
                        unlocked.createdAt
                      )
                      .toLocaleDateString()
                    }

                  </p>
                  )
                }


              </div>


              :

              <div
              className="
              mt-4
              text-gray-500
              "
              >

                🔐 Locked

              </div>

            }



          </div>

          );


        })
      }



      </div>



    </div>

  );

}


export default Achievements;