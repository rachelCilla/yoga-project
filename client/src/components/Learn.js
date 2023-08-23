import React from "react";
import OmImage from "../images/om.png";
import { motion } from "framer-motion";
import sevenSages from "../images/sages.png";
import narasimha from "../images/Narasimha.jpeg";
import lotusPainting from "../images/lotusPainting.jpg";
import hinduAltar from "../images/hindu_altar.jpg";
import hinduStatue from "../images/hinduStatue1.jpg";
import hatha from "../images/hatha.jpg";
import ashtanga from "../images/ashtanga.jpg";
import vinyasa from "../images/vinyasa.jpg";
import sunset from "../images/sunsetyoga.jpg";
export default function Learn() {
	return (
		<div className="bg-grayBlueDarker pt-24  mx-auto px-4 pb-5 ">
			<h1 className=" display-3 font-mont font-bold text-center text-primary3 mb-2">
				Learn about Yoga
			</h1>

			<nav className="text-center  ">
				<a
					className="me-3 inline-block text-primary1  md:text-2xl hover:underline hover:text-primary3"
					href="#section1"
				>
					What is Yoga?
				</a>
				<a
					className="me-3 inline-block text-primary1  md:text-2xl hover:underline hover:text-primary3"
					href="#section2"
				>
					The History of Yoga
				</a>
				<a
					className="me-3 inline-block text-primary1 md:text-2xl   hover:underline hover:text-primary3"
					href="#section3"
				>
					Yoga and the Divine
				</a>
				<a
					className="me-3 inline-block text-primary1 md:text-2xl hover:underline hover:text-primary3"
					href="#section4"
				>
					The Benefits of Yoga
				</a>
				<a
					className=" inline-block text-primary1 md:text-2xl hover:underline hover:text-primary3"
					href="#section5"
				>
					Yoga Styles
				</a>
			</nav>

			<article className=" mt-3 py-1 bg-primary1 rounded">
				<h1
					id="section1"
					className=" pt-2 font-bold bg-primary3 rounded text-center text-bg-grayBlueDarker font-mont  display-5 my-3"
				>
					What is Yoga?
				</h1>
				<div className="">
					<img
						className="mb-4 mx-auto  max-h-72"
						src={lotusPainting}
						alt="lotus pose painting"
					/>
				</div>
				<p className="mx-4 ">
					<p>
						Yoga is a collection of practices and
						disciplines that originated in ancient
						India. It encompasses physical, mental, and
						spiritual elements with the goal of
						controlling and calming the mind. Through
						these practices, yoga aims to cultivate a
						state of detached awareness and alleviate
						worldly suffering. Yoga has evolved into
						various schools, practices, and goals within
						Hinduism, Buddhism, and Jainism. Today, yoga
						is widely practiced around the world, both
						in its traditional and modern forms.
					</p>
				</p>
			</article>
			<article className=" mt-2 py-1  bg-primary1 rounded">
				<h1
					id="section2"
					className=" bg-primary3 rounded text-center text-bg-grayBlueDarker font-mont font-semibold display-5 mt-5 mb-3"
				>
					The History of Yoga
				</h1>

				<p className="mx-4 ">
					<h6 className=" mx-4 text-center font-mont md:text-2xl mb-2">
						The history of yoga dates back thousands of
						years to ancient India. It has evolved over
						time, encompassing various schools,
						practices, and philosophies.
					</h6>
					<p>
						Yoga's origins can be traced to the Indus
						Valley Civilization around 2700-1500 BCE,
						with the discovery of artifacts depicting
						yoga-like postures and figures in meditative
						poses.
					</p>

					<p>
						The classical period of yoga is often
						associated with the sage Patanjali, who
						compiled the "Yoga Sutras" around 400 CE.
						These texts outlined the philosophy of
						classical yoga, emphasizing the eightfold
						path, which includes ethical principles,
						physical postures (asanas), breath control
						(pranayama), meditation, and spiritual
						enlightenment.
					</p>

					<img
						className="mb-4 mx-auto  max-h-72"
						src={hinduStatue}
						alt="hindu lotus pose statue"
					/>

					<p>
						In the medieval period, yoga expanded to
						include different schools and practices.
						Bhakti yoga focused on devotion and love for
						a divine entity, Jnana yoga emphasized
						knowledge and wisdom, and Karma yoga
						centered around selfless actions and service
						to others.
					</p>

					<p>
						Yoga gained prominence in the West during
						the late 19th and early 20th centuries,
						largely due to figures like Swami
						Vivekananda and Paramahansa Yogananda, who
						introduced yoga philosophy and practices to
						a broader audience.
					</p>
					<p className="">
						In the 20th century, yoga's popularity
						continued to grow, with various teachers and
						styles emerging. Hatha yoga, which focuses
						on physical postures and breathing, became
						widely practiced. Additionally, modern yoga
						variations like Vinyasa, Bikram, and
						Ashtanga gained followers, each emphasizing
						different aspects of the practice.
					</p>
					<div className="md:flex items-center">
						<img
							src={hinduAltar}
							alt="Hindu Altar"
							className=" max-h-72 mx-auto mb-2 md:pl-4 md:pr-6"
						/>
						<p className="md:pr-6 font-mont">
							Today, yoga is a global phenomenon
							that encompasses a wide range of
							practices and philosophies. It is not
							only a physical exercise but also a
							holistic approach to well-being that
							addresses mental, emotional, and
							spiritual aspects of life.
						</p>
					</div>
				</p>
			</article>
			<article className=" mt-3  bg-primary1 rounded  py-1">
				<h2
					id="section3"
					className=" bg-primary3 rounded text-center text-bg-grayBlueDarker font-mont font-semibold display-5 mt-3 mb-3"
				>
					Yoga and the Divine
				</h2>
				<h6 className=" mx-4 text-center font-mont md:text-2xl">
					Yoga is more than just a physical practice; it is
					a profound spiritual journey that aims to align
					the body, mind, and soul, leading practitioners
					towards a deeper connection with the divine.
				</h6>
				<img
					className=" mx-auto mb-2  max-h-80"
					src={sevenSages}
					alt="Seven Sages"
				/>
				<p className="mx-4 ">
					Rooted in ancient Indian philosophy, yoga embodies
					a complex system that uses physical postures
					(asanas), breath control (pranayama), and
					meditation to foster inner harmony and
					self-realization. The concept of the divine in
					yoga is often expressed through the realization of
					a universal consciousness or supreme energy,
					transcending individual ego and worldly concerns.
					By cultivating mindfulness, self-discipline, and
					compassion through yoga, individuals can work
					towards a state of enlightenment or union with the
					divine, often referred to as Samadhi. This
					connection with the divine is considered the
					ultimate goal in many yogic traditions,
					symbolizing the merging of the individual self
					with the cosmic oneness, a blissful state where
					all separateness dissolves.
				</p>
			</article>

			<article className="  py-1 mt-2  bg-primary1 rounded">
				<h2
					id="section4"
					className=" bg-primary3 rounded text-center text-bg-grayBlueDarker font-mont font-semibold display-5 mt-3 mb-3"
				>
					The Benefits of Yoga
				</h2>
				<h6 className="md:text-4xl mx-4 font-mont mb-3">
					{" "}
					<div className="my-3 w-full text-center">
						{" "}
						Yoga offers a wide range of benefits for
						both the body and mind.{" "}
					</div>
					<img
						className=" mx-auto mt-2 max-h-80"
						src={sunset}
						alt="lotus pose at sunset"
					/>
					<br /> Here are some of the key benefits of
					practicing yoga:
				</h6>
				<p className="mx-4 ">
					<span className="h6 bg-primary2 rounded ">
						{" "}
						Physical Fitness:{" "}
					</span>
					Yoga improves overall physical fitness by
					increasing strength, flexibility, balance, and
					stamina. Regular practice can help tone and
					strengthen muscles, enhance cardiovascular health,
					and improve posture and body alignment.
					<br />
					<span className=" h6 bg-primary2 rounded mt-2 ">
						Stress Reduction:{" "}
					</span>{" "}
					Yoga is knowfor its stress-relieving benefits.
					Through deep breathing, relaxation techniques, and
					mindful movement, yoga helps calm the nervous
					system, reduce stress hormones, and promote
					relaxation. This can lead to improved mental
					well-being and a greater sense of calm and inner
					peace.
					<br />
					<span className=" h6 bg-primary2 rounded mt-2 ">
						Flexibility and Joint Health:{" "}
					</span>
					Yoga poses, or asanas, work to increase
					flexibility and improve joint mobility. Regular
					stretching and movement in yoga can help increase
					range of motion, prevent injuries, and alleviate
					stiffness and tension in the body.
					<br />
					<span className=" h6 bg-primary2 rounded mt-2 ">
						{" "}
						Mind-Body Connection:
					</span>
					Yoga emphasizes the connection between the mind
					and body. Through focused awareness on the breath
					and the present moment, yoga cultivates
					mindfulness and enhances body awareness. This can
					help improve concentration, mental clarity, and
					overall mind-body coordination.
					<br />
					<span className=" h6 bg-primary2 rounded mt-2 ">
						{" "}
						Emotional Well-being:
					</span>{" "}
					Yoga has positive effects on emotional well-being
					by reducing symptoms of anxiety, depression, and
					stress. The practice of yoga encourages
					self-reflection, self-acceptance, and self-care,
					promoting a more positive and balanced emotional
					state.
					<br />
					<span className=" h6 bg-primary2 rounded mt-2 ">
						{" "}
						Improved Sleep:
					</span>
					Regular yoga practice can help improve sleep
					quality and promote relaxation. The combination of
					physical movement, breathing techniques, and
					relaxation practices can calm the mind and prepare
					the body for restful sleep.
					<br />
					<span className=" h6 bg-primary2 rounded mt-2 ">
						{" "}
						Increased Energy and Vitality:
					</span>{" "}
					Yoga practices, such as dynamic sequences and
					breathwork, can boost energy levels and increase
					vitality. Through the release of physical and
					mental tension, yoga revitalizes the body and
					mind, leaving you feeling more energized and
					refreshed.
					<br />
					<span className=" h6 bg-primary2 rounded mt-2 ">
						{" "}
						Posture and Alignment:
					</span>
					Yoga helps improve posture and body alignment by
					strengthening the core muscles and promoting
					proper body mechanics. Increased awareness of body
					alignment during yoga poses can carry over into
					daily life, leading to better posture and reduced
					risk of musculoskeletal issues.
					<br />
					<span className=" h6 bg-primary2 rounded mt-2 ">
						{" "}
						Mindfulness and Stress Management:
					</span>
					Yoga promotes mindfulness, which involves being
					fully present in the moment without judgment. This
					mindfulness practice carries over into daily life,
					helping individuals manage stress more effectively
					and develop a greater sense of well-being.
					<br />
					<span className=" h6 bg-primary2 rounded mt-2 ">
						{" "}
						Inner Peace and Spiritual Growth:
					</span>
					Yoga provides an opportunity for spiritual growth
					and self-discovery. Through meditation,
					self-reflection, and the integration of yogic
					philosophy, individuals can deepen their
					understanding of themselves and cultivate a sense
					of inner peace, purpose, and connection to
					something greater. It's important to note that the
					benefits of yoga are cumulative and tend to
					develop over time with consistent practice.
					Whether you're a beginner or an experienced
					practitioner, yoga can have a positive impact on
					your physical, mental, and emotional well-being,
					supporting a healthy and balanced lifestyle.
				</p>
			</article>
			<article id="section5" className=" mt-2  bg-primary1 rounded">
				<h2 className="text-center text-bg-grayBlueDarker font-mont font-semibold display-5 mt-5 pt-3 mb-3">
					Yoga Styles
				</h2>
				<h3 className="mx-3 bg-primary2 rounded">Hatha</h3>
				<p className="mx-4 ">
					Hatha is a style of yoga that focuses on physical
					postures (asanas), breathing techniques
					(pranayama), and relaxation. The word “hatha” is
					derived from two Sanskrit words: “ha,” which means
					sun, and “tha,” which means moon. This reflects
					the balance between opposing forces that is
					central to the practice of Hatha Yoga. Hatha is
					often practiced at a slower pace than other styles
					of yoga, with a focus on holding postures for
					longer periods of time and using the breath to
					deepen the poses. The practice of hatha is
					designed to promote physical strength,
					flexibility, and balance, as well as mental
					clarity and relaxation. In addition to asanas and
					pranayama, hatha may also include meditation and
					other practices designed to cultivate awareness
					and mindfulness. There are many different styles
					and approaches to hatha yoga, including Iyengar,
					Ashtanga, Vinyasa, and others, each of which may
					emphasize different aspects of the practice.
				</p>
				<img
					className="mb-4 mx-auto max-h-72"
					src={hatha}
					alt="hatha pose"
				/>

				<h3 className="mx-3 bg-primary2 rounded">Ashtanga</h3>
				<p className="mx-4 ">
					Ashtanga is a style of yoga that follows a set
					sequence of postures (asanas) that are linked
					together with a specific breathing technique
					called Ujjayi breath. The word “ashtanga” is
					derived from two Sanskrit words: “ashta,” which
					means eight, and “anga,” which means limbs. The
					eight limbs of Ashtanga include ethical
					guidelines, physical postures, breathing
					techniques, meditation, and other practices
					designed to promote spiritual growth and
					well-being. The physical practice of Ashtanga
					typically involves a vigorous and demanding series
					of postures that are divided into six different
					sequences, each with a specific focus and level of
					difficulty. The practice is intended to be done in
					a specific order, with each pose building on the
					previous one. Ashtanga is often practiced in a
					group setting, with students working through the
					sequence at their own pace while being guided by a
					teacher. The practice can be physically
					challenging and is designed to build strength,
					flexibility, and endurance. In addition to the
					physical benefits, the practice of Ashtanga can
					also promote mental focus and relaxation, as
					practitioners are encouraged to stay present and
					focused on their breath throughout the practice.
					Ashtanga was popularized in the West by Sri K.
					Pattabhi Jois, who developed the specific sequence
					of postures that is now known as the “Ashtanga
					Primary Series.” Today, there are many different
					styles and approaches to ashtanga, with some
					teachers modifying the sequence to suit the needs
					and abilities of their students.
				</p>
				<img
					className="mb-4 mx-auto max-h-72"
					src={ashtanga}
					alt="ashtanga pose"
				/>

				<h3 className="mx-3 bg-primary2 rounded">Vinyasa</h3>
				<p className="mx-4  mb-2 pb-2 ">
					Vinyasa is a style of yoga that emphasizes
					flowing, dynamic movements that are synchronized
					with the breath. The word “vinyasa” is derived
					from the Sanskrit term “nyasa,” which means “to
					place,” and the prefix “vi,” which means “in a
					special way.” In vinyasa, each movement is linked
					to an inhalation or exhalation, creating a
					continuous flow of movement. The practice of
					vinyasa typically includes a series of postures
					(asanas) that are linked together in a flowing
					sequence, with each movement coordinated with the
					breath. Vinyasa can be physically challenging, as
					the continuous movement and transitions between
					poses require strength, flexibility, and balance.
					In addition to the physical benefits, the practice
					of vinyasa can also promote mental focus and
					relaxation, as practitioners are encouraged to
					stay present and focused on the breath throughout
					the practice. There are many different styles and
					approaches to vinyasa , including Power Yoga,
					Jivamukti, and others, each of which may emphasize
					different aspects of the practice.
				</p>
				<img
					className="mb-4 pb-4 mx-auto max-h-72"
					src={vinyasa}
					alt="vinyasa pose"
				/>
			</article>
		</div>
	);
}
