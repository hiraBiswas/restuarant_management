

const Blog = () => {
    return (
        <div className="container flex mx-auto ">
            <div className="w-2/3 ">
                <div >
                    <img src="https://i.ibb.co/vQzz0TT/fried-rice-with-minced-pork-tomato-carrot-cucumber-plate.jpg" alt="" />
                </div>
                <div className="flex gap-8 items-center justify-between">
                    <div className="w-2/3 text-gray-400 mx-5">
                        <h1 className="text-bold text-2xl text-white">Ingredients:</h1>
                        <p>2 cups cooked rice (preferably day-old rice)
                            1 cup mixed vegetables (carrots, peas, corn, and diced bell peppers),
                            1/2 cup diced onions,
                            2 cloves garlic, minced
                            2 eggs, beaten,
                            3 tablespoons soy sauce,
                            1 tablespoon oyster sauce,
                            1 teaspoon sesame oil,
                            2 green onions, chopped
                            2 tablespoons vegetable oil for cooking,
                            Salt and pepper to taste</p>
                        <br />
                        <h3 className="text-bold text-2xl text-white">Instruction:</h3>
                        <p>
                            In the lively wok theater, vegetable oil sizzles over medium-high heat, setting the stage for the aromatic duo of diced onions and minced garlic. As they waltz, beaten eggs make a dramatic entrance, swirling and scrambling until just set. The vegetable medley joins the ensemble, dancing to a crisp yet tender rhythm, paving the way for the grand entrance of cooked rice, artfully breaking free from clumps. The trio of soy sauce, oyster sauce, and sesame oil drizzles over the rice, creating a harmonious symphony of flavors. Stir-frying unites the cast, allowing the rice and vegetables to absorb the savory notes for 2-3 minutes. Seasoned with salt and pepper, this culinary performance concludes with a fresh flourish—chopped green onions—and is ready to take center stage as a delightful main course or a captivating side dish.</p>

                    </div>
                    <div className="w-1/3 mx-auto">
                        <img className="h-40 w-40" src="https://i.ibb.co/9yQyTYC/milled-rice-black-bowl-black-cement-floor.jpg" alt="" />
                        <img className="h-40 my-3 w-40" src="https://i.ibb.co/GVMJhfn/chicken-beef-cocktail-sausages.jpg" alt="" />
                        <img className="h-40 w-40" src="https://i.ibb.co/3Mh2xR7/fresh-organic-various-tomatoes.jpg" alt="" />
                    </div>
                </div>

            </div>
            <div className="w-1/3 ">
             <div className="mx-5">
               <img className="h-60 w-full" src="https://i.ibb.co/s26X6S1/pexels-madjid-atmania-12285424.jpg" alt="" />
               <h1 className="text-2xl font-medium text-white"><span className="text-red-500">Orange Flavour Cake- </span>Softest Cake You Ever Tested</h1>
             </div>

             <div className="mx-5 my-5">
               <img className="h-60 w-full" src="https://i.ibb.co/RgP9MCw/pexels-photomix-company-96974.jpg" alt="" />
               <h1 className="text-2xl font-medium text-white"><span className="text-red-500">Fresh Orange juice- </span>Clear All Your Exhaustion</h1>
             </div>

             <div className="mx-5">
               <img className="h-60 w-full" src="https://i.ibb.co/Y7WkXyr/front-view-burger-stand.jpg" alt="" />
               <h1 className="text-2xl font-medium text-white"><span className="text-red-500">Juicy, Tender, Cheesy Burger- </span>Take You To The Haven</h1>
             </div>
             <div>

             </div>

             <div>

             </div>
            </div>
        </div>
    );
};

export default Blog;