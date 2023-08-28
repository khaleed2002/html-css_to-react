import { services } from "../data";
import Title from "./Title";
import Service from "./Service";
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our services" />
      <div className="section-center services-center">
        {services.map((service) => {
          return (
            <Service service={service}/>
          );
        })}
      </div>
    </section>
  )
}
export default Services