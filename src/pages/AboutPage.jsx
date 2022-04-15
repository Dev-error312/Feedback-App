import Card from "../component/shared/Card"
import { Link } from "react-router-dom"

function AboutPage() {
  return (
    <Card>
        <div className="about">
          <h1>About This Project</h1>
          <p>This is a React app to leave feedback for a product or services.</p>
          <p>Developed By - Suyog Adhikari</p>
          <p>Vesion: 1.0.0</p>

          <p>
            <Link to="/">Back To Home</Link>
          </p>
        </div>
    </Card>
  )
}

export default AboutPage