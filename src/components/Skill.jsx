import "./Skill.css"
import Loader from "../components/Loader/Loader"
import { ImageLoader } from "../hooks/ImageLoader";

export default function Skill({ data }) {
  return (
    <>
      {data.map((detail, index) => {

        const status = ImageLoader(detail.image)

        return (
          <>


            <div className="skill-card" key={index}>
              <div className="card-inner">

                <div className="card-front">
                  <div className="card-image">
                    <h1>{detail.name}</h1>

                    {status === "loading" && <Loader />}
                    {status === "error" && <h1>image not found</h1>}
                    {status === "loaded" && (
                      <img src={detail.image} alt={detail.name} />
                    )}
                  </div>

                  <div className="outer-bar">
                    <p>{detail.caption}</p>
                  </div>
                </div>

                <div className="card-back">
                  <p>Hooks, Router, State Management</p>
                </div>

              </div>
            </div>

          </>
        )
      })}
    </>
  )
}