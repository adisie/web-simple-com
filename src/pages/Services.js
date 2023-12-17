import {motion} from 'framer-motion'

const Services = () => {
  return (
    <div className="service-container">
      <motion.div className="service sub-container"
        initial={{
          // x: '100vw',
          opacity: 0
        }} 

        animate={{
          // x: 0,
          opacity: 1,
        }}

        transition={{
          duration: 1
        }}
        >
        <h3>Service We Provide</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, id optio consectetur fugiat voluptates soluta ullam ratione! Error quibusdam nulla perferendis vel beatae adipisci ipsum sunt dolor enim eveniet, itaque voluptate? Ut ad officiis molestiae minima voluptate facilis molestias, nulla, esse sapiente nostrum fugiat earum. Debitis quibusdam consectetur nemo nobis facere, totam reprehenderit hic asperiores doloremque, sed impedit in reiciendis aperiam dicta? Dicta mollitia quasi eaque possimus ipsum pariatur quae, dignissimos molestias quidem odio, animi, molestiae dolorum fugit voluptatem at minima neque voluptate eligendi accusamus reprehenderit tempora. Vero laudantium sit quo laboriosam dicta? Minima quae, ullam nesciunt quod delectus error?</p>
      </motion.div>
    </div>
  )
}

export default Services
