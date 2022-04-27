import './portfolio.scss'

export default function Portfolio() {
  return (
    <div className = "portfolio" id = "portfolio">
      <div className="directory">
        <h1>Portfolio</h1>
        {/* <ul>
          <li className = "active">Computer Vision with TensorFlow</li>
        </ul> */}
      </div>

      <div className="project">
        <div className = "introduction">
          <h3>Computer vision with tensorflow</h3>
          <div className="title-image-container">
              <img src="assets/starfishImg.png" alt="starfish" />
          </div>
          
          <div className="description">
            <p>
              The problem: 
              "Australia's stunningly beautiful Great Barrier Reef is the world’s largest coral reef and home to 1,500 species of fish, 400 species of corals, 130 species of sharks, rays, and a massive variety of other sea life.
              Unfortunately, the reef is under threat, in part because of the overpopulation of one particular starfish – the coral-eating crown-of-thorns starfish (or COTS for short). Scientists, tourism operators and reef managers established a large-scale intervention program to control COTS outbreaks to ecologically sustainable levels.
              To know where the COTS are, a traditional reef survey method, called "Manta Tow", is performed by a snorkel diver. While towed by a boat, they visually assess the reef, stopping to record variables observed every 200m. While generally effective, this method faces clear limitations, including operational scalability, data resolution, reliability, and traceability."     

              <a href= 'https://www.kaggle.com/competitions/tensorflow-great-barrier-reef' alt = 'kaggle page'>You can find out more about the project by visiting the competition page.</a>
            </p>

            <p>
              Proposed solution:
                Utilize machine learning to build an object detection model to identify coral-eating crown-of-thorns starfish in a video.
            </p>
          </div>
        </div>

        <div className ="details">

          <div className="row">
              <div className = "image-column"> 
                <img src="assets/cots1.png" alt="starfish" />
              </div>

              <div className = "description">
                {/* what were some limitations/challenges
                * learning new technologies (python, pandas, tensorflow, studying different ML algorithms, jupyter notebooks)
                not the best image data, we had to use kaggle's built in notebook, which has a memory limit, making it harder to train models more accurately -- aka need better hardware
                [right text] */}
                The picture to the left presents one image from the original video data (where a video consists of temporally-linked images) with boxes around each identified starfish. Confident inferences are indicated in green, while inferences with less confidence are orange or red.
              </div>
          </div>

          <div className="row">
            <div className = "image-column"> 
              <img src="assets/startingdf.png" alt="starfish" />
            </div>

            <div className = "description">
              {/* what are some ways to use machine learning to find the starfish */}
              {/* "computer vision" with "yolov5" model with custom weights based on our training set some of the data was off - only as good as data u get*/}
              Limits/Challenges: Kaggle does not have much memory so I was unable to test the model using different batch sizes.
              Others who have used the same dataset have commented on how the data itself wasn't always accurate - some boxes are slighly off, there are several false negatives (the model does not find all of the starfish), etc
              The original kaggle data couldn't be edited - it had to be copied into new paths so that bounding boxes can be implemented and displayed.
              The image to the left displays the starting dataframe. The "annotations" column shows if there are starfish and how many there are. Each row shows up as blank because the data is displayed as a string instead of a 2D array of starfish objects, this was fixed with python's eval function.
            </div>
          </div>

          <div className="row">
            <div className = "image-column"> 
              <img src="assets/endingdf.png" alt="starfish" />
            </div>

            <div className = "description">
              The image to the left shows the ending dataframe where data is normalized so the that YOLOv5 model can be implemented.
              YOLOv5 is a detection model which takes batches of training data and classifies objects based on the coordinates specified in the dataframe. Normalizing data is a simple requirement for every YOLO model.
              The adam optimizer was also utilized to select rules by approximating the best score from the loss function and to make educated guesses on how to improve rule.
            </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}
