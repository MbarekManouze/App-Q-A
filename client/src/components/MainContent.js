import React , {useEffect, useState} from "react";
import axios from "axios";


const Question = ({Data}) => {


    const [question, setquestion] = useState('');
    const [answer, setanswer] = useState('');

    const handlePostQuestion =  async () => {
        try{

            await axios.post('http://localhost:5000/features/PostQuestion', {
            question,
          }, {withCredentials: true}).then(() => {
            setTimeout(() => {
                
                window.location.href = "http://localhost:3000/MainContent";
            }, 1500);
          })
        }
        catch(error){
        }
      };

      const handleAnswerQuestion = async (answeredQuestion) => {
        try {
            await axios.post('http://localhost:5000/features/PostAnswer', {
                answeredQuestion,
                answer,
            }, { withCredentials: true }).then(() => {
                setTimeout(() => {
                    
                    window.location.href = "http://localhost:3000/MainContent";
                }, 1500);
              })
        } catch (error) {
        }
    };


    return (    
        <>
        <h1 className="text-3xl font-bold text-black">Question Feed</h1>
        {
            Data.map((scoop) => {
                return (
                    <div className="flex flex-col gap-10 p-6 m-20 rounded-md" style={{ backgroundColor: "beige" }}>
                        <section className="w-full">
                            <div className="grid gap-6 mt-0">
                                <div className="rounded-lg border border-gray-600 bg-card text-black shadow-sm " data-v0-t="card">
                                    <div className="flex flex-col space-y-1.5 p-6">
                                        <div className="flex items-center justify-between">                                            
                                            <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">{scoop?.question}</h3>
                                        </div>
                                        <button className=" ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rounded-full p-1 h-8 w-8 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="p-6">
                                        {
                                            scoop?.answer.map((scoop) => {
                                                return (
                                                    <div className="flex items-center justify-between">                                         
                                                        <h3 className="text-2xl ml-32 font-semibold whitespace-nowrap leading-none tracking-tight">{'-  ' + scoop?.answer}</h3>
                                                    </div>
                                                )
                                            })
                                        }
                                        <form>
                                            <button className="inline-flex mt-14 my-3 items-center border-gray-700 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full
                                                hover:text-white
                                                hover:border-green-800
                                                hover:bg-black
                                                " onClick={() => handleAnswerQuestion(scoop.question)}
                                                type="button"
                                                >
                                                Answer
                                            </button>
                                            <input className="flex  h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[50px]    " 
                                            id="question" required="" onChange={(e) => setanswer(e.target.value)} />
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </section>
                    </div>
                )
            })
        }
            <div className="w-full" style={{ backgroundColor: "beige" }}>
                <form className="grid gap-4 mt-4 text-black">
                    <div className="space-y-1">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="question">Question</label>
                        <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]" 
                            id="question" required="" onChange={(e) => setquestion(e.target.value)} />
                    </div>
                    <button className="inline-flex cursor-pointer items-center border-gray-700 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full
                                hover:text-white
                                hover:border-green-800
                                hover:bg-green-500 text-black" type="button" onClick={handlePostQuestion} >
                        Post Question
                    </button>
                </form>
            </div>
        </>    
    );
};

const MainContent = () => {

    const [questions, SetQuestions] = useState([]);

    useEffect( () => {
        const fetchdata = async () => {
            const data = await axios.get("http://localhost:5000/features/Quetions&Answers", {withCredentials: true})
            .catch((error) => {
            })
            SetQuestions(data.data);
        }
        fetchdata();
    }, []);

    return (
        <div className="w-full">
            <div className="w-full h-full">
                <Question Data={questions}/>
            </div>
        </div>
    );
}

export default  MainContent;