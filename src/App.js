import { TbWorld } from "react-icons/tb";
import "./App.css";
import { FAQ } from "./components/FAQ";


function App() {

  
  return (
    <div>
      <div
        className="flex flex-col w-[100wh] h-[100vh]"
        style={{
          backgroundImage:
            "url('https://assets.nflxext.com/ffe/siteui/vlv3/b85863b0-0609-4dba-8fe8-d0370b25b9ee/fdf508c8-97d0-42fd-a6f9-9bef6bf96934/IN-en-20230731-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
        }}
      >
        <div className="nav flex justify-between mx-20 my-7">
          <div>
            <img
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
              width="180px"
              height="22px"
            ></img>
          </div>
          <div className=" flex  gap-8 ml-10">
            <div className="Language border-2 border-slate-300 rounded-md h-10 flex align-center items-center">
              <button className="font-bold text-white max-w-[100px]  flex flex-row gap-2 align-center items-center mx-1">
                {" "}
                <TbWorld /> English ^
              </button>
            </div>
            <div className="Sign-in  ">
              <button className="font-bold text-white w-20 h-10 bg-red-600 rounded-md">
                Sign In
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col align-center items-center max-w-[1000px] mx-auto mt-28 gap-5">
          <p className="text-white text-5xl font-[900]">
            Unlimited movies, TV shows and more
          </p>
          <p className="text-white text-2xl">Watch anywhere. Cancel anytime.</p>
          <p className="text-white text-xl">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <div className="flex gap-3">
            <input
              type="email"
              placeHolder="Email Address"
              className=" placeholder:text-slate-400   text-white placeholder:px-3 bg-black bg-opacity-50 border border-slate-300 rounded-md  w-[400px] shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm px-3"
            ></input>
            <button className="font-bold text-white py-3 px-5 text-xl bg-red-600 rounded-md">
              Get Started &gt;
            </button>
          </div>
        </div>
      </div>
      {/* seprator */}
      <div className="w-full h-2 bg-slate-800"></div>

      <div className="w-full bg-black h-[80vh] flex w-max-[1000px]">
        <div className="mx-auto flex flex-row my-10">
          <div className="w-[40%]   ml-40 pl-7 ">
            <p className="text-white font-extrabold pl-30 text-5xl mt-40 ">
              Enjoy on your TV
            </p>
            <p className="text-white  pl-30 text-2xl mt-3 ">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>

          <div className="w-[40%]  ">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"></img>
          </div>
        </div>
      </div>

      {/* seprator */}
      <div className="w-full h-2 bg-slate-800"></div>

      <div className="w-full bg-black h-[80vh] flex w-max-[1000px]">
        <div className="mx-auto flex flex-row my-10 ">
          <div className="w-[35%]  ml-40">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"></img>
          </div>

          <div className="w-[40%] ">
            <p className="text-white font-extrabold text-5xl mt-[150px] ">
              Download your shows to watch offline
            </p>
            <p className="text-white  pl-30 text-2xl mt-3 ">
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>

      {/* seprator */}
      <div className="w-full h-2 bg-slate-800"></div>

      <div className="w-full bg-black h-[80vh] flex w-max-[1000px]">
        <div className="mx-auto flex flex-row my-10">
          <div className="w-[40%]  ml-40 pl-7 ">
            <p className="text-white font-extrabold pl-30 text-5xl mt-40 ">
              Watch everywhere
            </p>
            <p className="text-white  pl-30 text-2xl mt-3 ">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>

          <div className="w-[40%]  ">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"></img>
          </div>
        </div>
      </div>

      {/* seprator */}
      <div className="w-full h-2 bg-slate-800"></div>

      <div className="w-full bg-black h-[80vh] flex w-max-[1000px]">
        <div className="mx-auto flex flex-row my-10 ">
          <div className="w-[35%]  ml-40">
            <img src="https://occ-0-3217-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"></img>
          </div>

          <div className="w-[40%] ml-6">
            <p className="text-white font-extrabold text-5xl mt-[120px] ">
              Create profiles for kids
            </p>
            <p className="text-white  pl-30 text-2xl mt-3 ">
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </p>
          </div>
        </div>
      </div>

      {/* seprator */}
      <div className="w-full h-2 bg-slate-800"></div>

      <div className="bg-black">
        <div className="flex w-[700px] mx-auto ">
          <p className="text-white font-extrabold  text-5xl mt-[80px] mb-12">
            Frequently Asked Questions
          </p>
        </div>

        <div>
          <FAQ
            question={"What is NetFlix ?"}
            ans1={
              "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices."
            }
            ans2={
              "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
            
}
          />
          <FAQ
            question={"How much does NetFlix cost ?"}
            ans1={
              "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts."
            }
            ans2={""}
          />

          <FAQ
            question={"Where I can watch ?"}
            ans1={
              "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
            }
            ans2={
              "You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
            }
          />

          <FAQ 
          question={"How do I cancel ?"} 
          ans1={"Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."} 
          ans2={""} />

          <FAQ 
          question={"What  can I watch on NetFlix ?"} 
          ans1={"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."} 
          ans2={""} />

          <FAQ 
          question={"Is NetFlix good for kids ?"} 
          ans1={"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space."} 
          ans2={"Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."} />
        </div>
      </div>

      <div className="flex flex-col align-center bg-black items-center max-w-full mx-auto py-20 gap-5">
      <p className="text-white text-xl ">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
      <div className="flex gap-3">
            <input
              type="email"
              placeHolder="Email Address"
              className=" placeholder:text-slate-400   text-white placeholder:px-3 bg-black bg-opacity-50 border border-slate-300 rounded-md  w-[400px] shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm px-3"
            ></input>
            <button className="font-bold text-white py-3 px-5 text-xl bg-red-600 rounded-md">
              Get Started &gt;
            </button>
          </div>
      </div>

         {/* seprator */}
         <div className="w-full h-2 bg-slate-800"></div>

         <div className="h-[500px] w-full bg-black flex justify-around align-center">
           
         
            <div className="ml-[200px] my-[150px]">
              
                <ul>
                  
                  <li  className="text-white py-2">FAQ</li>
                  <li className="text-white py-2">Media Centre</li>
                  <li className="text-white py-2">Ways to Watch</li>
                  <li className="text-white py-2">Cookie Preferences</li>
                  <li className="text-white py-2">Speed Test</li>
                  
                  <li className="mt-10">
                     <div className="Language border-2 border-slate-300 rounded-md h-10 flex align-center items-center">
              <button className="font-bold text-white max-w-[100px]  flex flex-row gap-2 align-center items-center mx-1">
                {" "}
                <TbWorld /> English ^
              </button>
            </div>
                  </li>

                  <li className="text-white py-2 pt-3">NetFlix India</li>
                 
                </ul>
            </div>

            <div className="ml-[200px] my-[150px]">
                <ul>
                  <li  className="text-white py-2">Help Centre</li>
                  <li className="text-white py-2">Investor Relations</li>
                  <li className="text-white py-2">Terms of Use</li>
                  <li className="text-white py-2"> Corporate Information</li>
                  <li className="text-white py-2">Legal Notices</li>
                 
                </ul>
            </div>

            <div className="ml-[200px] my-[150px]">
                <ul>
                  <li  className="text-white py-2">Account</li>
                  <li className="text-white py-2">Jobs</li>
                  <li className="text-white py-2">Privacy</li>
                  <li className="text-white py-2"> Contact Us</li>
                  <li className="text-white py-2">Only on Netflix</li>
                </ul>
            </div>

            <div>

            </div>

            <div>

            </div>

         </div>
    </div>
  );
}

export default App;
