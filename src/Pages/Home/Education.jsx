import data from "../../data/index.json";

export default function MyEducation() {
  return (
    <section className="skills--section" id="Education">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">Education</h2>
      </div>
      <div className="skills--section--container">
        {data?.education?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              {/* Use dangrouslyStInnerHTML to render HTML */}
              <p className="skills--section--description" dangerouslySetInnerHTML={{__html:item.description}}></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
