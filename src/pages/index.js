import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';


const FeatureList = [
  {
    title: 'Create Worlds',
    png: require('@site/static/img/Index/CreateWorlds.png').default,
    description: (
      <>
        Build immersive XR environments that captivate users
      </>
    ),
  },
  {
    title: 'Add Interactions',
    png: require('@site/static/img/Index/AddInteractions.png').default,
    description: (
      <>
        Make these worlds alive & interactive with behaviours
      </>
    ),
  },
  {
    title: 'Play Anywhere',
    png: require('@site/static/img/Index/PlayAnywhere.png').default,
    description: (
      <>
        Experience your creation seamlessly across multiple platforms
      </>
    ),
  },
];

const TutorialBlockList = [
  {
    title: 'New to XRCC?',
    png: require('@site/static/img/Index/NewToXRCCImg.png').default,
    description: (
      <>
        Learn the basics of XRCC interface and navigation for newcomers to XRCC.
      </>
    ),
    buttonText: 'Explore Basics',
    buttonLink: "/XRCC_Tutorial/GeneralGuide/Overview/",
  },
  {
    title: 'Flexible to use Behaviour Block',
    png: require('@site/static/img/Index/FlexibleToUseBehaviourBlock.png').default,
    description: (
      <>
        Start using XRCC functional behaviour blocks to provide a dynamic interactive experience.
      </>
    ),
    buttonText: 'Start No-code Creation',
    buttonLink: "/XRCC_Tutorial/BehaviourOverview/Introduction",
  },
  {
    title: 'Use Case & Video Tutorial',
    png: require('@site/static/img/Index/UseCaseAndVideoTutorial.png').default,
    description: (
      <>
        Step-by-step tutorial for you on how to navigate and utilize XRCC effectively.
      </>
    ),
    buttonText: 'View More',
    buttonLink: "/XRCC_Tutorial/Tutorial/Introduction/",
  }
]

const PreviewImgList = [
  {
    png: require('@site/static/img/Index/HomePagePreview1.png').default,
  },
  {
    png: require('@site/static/img/Index/HomePagePreview2.png').default,
  },
  {
    png: require('@site/static/img/Index/HomePagePreview3.png').default,
  },
  {
    png: require('@site/static/img/Index/HomePagePreview4.png').default,
  },
  {
    png: require('@site/static/img/Index/HomePagePreview5.png').default,
  },
  {
    png: require('@site/static/img/Index/HomePagePreview6.png').default,
  },
]

function HomepageUpperFrame() {
  return (
    <header className="HomePageHeader-UpperFrame">
      <img src="img/Index/HomePageHeader.png" alt="Background" className="homepagetitle-background-image" />
      <div className="homepageTitle-container">
        <div className="XRCC-Heading">Welcome to XRCC Tutorial</div>
        <img src="img/Index/HomePageSlogan.png" className="spacing-px HomePageSlogan" />
        <div className={styles.buttons}>
          <Link
            className="HomePageButton-Purple"
            to="/XRCC_Tutorial/Tutorial/Introduction/">
            <div className="HomePageText-Pink">Start your Tutorial in 5 mins</div>
          </Link>
        </div>
      </div>
    </header>
  );
}


function Feature({ png, title, description }) {
  return (
    <div className="HomePageFeatureFrame">
      <div className="text--center">
        <img src={png} className="HomePageFeatureImage" />
      </div>
      <div className="text--center padding-horiz--md">
        <div className="HomePageFeatureTitle">{title}</div>
        <p>{description}</p>
      </div>
    </div>
  );
}

function TutorialBlock({ png, title, description, buttonText, buttonLink }) {
  return (
    <div className="HomePageTutorialBlockFrame">
      <img src={png} className="HomePageTutorialsImage" />
      <div className="text--left">
        <div className="HomePageTutorialBlocksTitle">{title}</div>
        <p className="HomePageTutorialDescription">{description}</p>
        <Link
          className="HomePageTutorialButton-Purple"
          to={buttonLink}>
          <div className="HomePageText-Pink-Bold">{buttonText} 
          <img src="img/Index/solar_arrow-right-linear.png" className="HomePageIcon-24px" />
          </div>
          
        </Link>
      </div>
    </div>
  );

}

function ImgBlock({ png }) {
  return (
    <img src={png} className="PreviewImageItem" />
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="HomePageFeaturesContainer">
        <img src="img/Index/HomePageSciFiHighlight.png" alt="Background" className="HomePageFeatureBackgroundSciFiHighlight" />
        <div className="HomePageMiddleText-Black-24px">Craft your reality, from concept to experience, in just</div>
        <div className="HomePageMiddleText-Pruple-36px">3 Seamless Steps</div>
        <div className="HomePageFeaturesRow">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HomepageTutorialFrame() {
  return (
    <section className={styles.features}>
      <div className="HomePageTutorialsContainer">
        <img src="img/Index/HomePageTutorialBackground.png" alt="Background" className="homepageTutorial-background-image" />
        <div className="HomePageTutorialRow">
          {TutorialBlockList.map((props, idx) => (
            <TutorialBlock key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HomepageStartTutorialFrame() {
  return (
    <section className={styles.features}>
      <div className="HomePageTutorialStartContainer">
        <div alt="Background" className="homepageTutorialStart-background-image" />
        <div className="HomePageTutorialRow">
          <div className="StartTutorialFrame">
            <div className="StartTutorialText-Purple">Get Start Your XR Vision To Life</div>
            <div className="StartTutorialText-PurpleRed">IN UNDER 2 HOURS</div>
            <div className="StartTutorialText-Black">Get inspired, get creative, and get results fast with XRCC</div>
            <Link
              className="HomePageButton-Purple"
              to="/XRCC_Tutorial/Tutorial/Introduction/">
              <div className="HomePageText-Pink">Start your Tutorial in 5 mins</div>
            </Link>


          </div>
          <div className="PreviewImageContainer">
            {PreviewImgList.map((props, idx) => (
              <ImgBlock key={idx} {...props} />
            ))}
          </div>
        </div>


      </div>

    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageUpperFrame />
      <main>
        <HomepageTutorialFrame />
        <HomepageFeatures />
        <HomepageStartTutorialFrame />
      </main>
    </Layout>
  );
}
