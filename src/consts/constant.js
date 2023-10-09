import blogFour from "../img/Blogs/BlogFour.svg";
import blogFive from "../img/Blogs/BlogFive.svg";
import campaignEvaluation from "../img/campaignEvaluation.svg";
import impactAssessment from "../img/impactAssessment.svg";
import labelEvaluation from "../img/labelEvaluation.svg";
import neuroConsulting from "../img/neuroConsulting.svg";
import neuroSegmentation from "../img/neuroSegmentation.svg";
import sensoryEngagement from "../img/sensoryEngagement.svg";

export const blogActions = [
  {
    id: 1,
    name: "Eye Tracking",
  },
  {
    id: 2,
    name: "Cognition",
  },
  {
    id: 3,
    name: "Social Media",
  },
  {
    id: 4,
    name: "Topic 1",
  },
];

export const blogs = [
  {
    id: 1,
    image: blogFour,
    heading:
      "Enhancing User Experience in Social Media: Unleashing the Power of Eye Tracking",
    description:
      "Social media has become integral to our lives in today's digital landscape. Brands and businesses leverage social media platforms to engage with customers and foster brand loyalty. But how can we ensure that the user experience on social media is optimised for maximum impact?",
  },
  {
    id: 2,
    image: blogFive,
    heading:
      "Enhancing User Experience: Unleashing the Power of Eye Tracking in HCI",
    description:
      "In today's digital world, eye-tracking technology has emerged as a game-changer in understanding and improving human-computer interaction (HCI). By tracking and analysing the movements of a user's eyes, eye tracking allows us to gain valuable insights into their visual attention and gaze behaviour",
  },
];

export const serviceActions = [
  {
    id: 1,
    serviceName: "Service 1",
  },
  {
    id: 2,
    serviceName: "Service 2",
  },
  {
    id: 3,
    serviceName: "Service 3",
  },
  {
    id: 4,
    serviceName: "Service 4",
  },
  {
    id: 5,
    serviceName: "Service 5",
  },
];

export const servicesList = [
  {
    id: 1,
    heading: "Neuro-Strategic Consulting",
    description:
      "Differing from conventional consulting approaches, NeuroUX utilizes a meticulous process of neuroscientific validation. This, combined with the expertise of our specialized consultants, ensures tangible outcomes for our clients in every consulting engagement. Furthermore, we centre our efforts on nurturing the skill sets and proficiencies of executives, thereby cultivating them into high-performance teams that enhance strategic decision-making prowess. This commitment extends to the following key domains",
    btnName: "Try it out",
    image: neuroConsulting,
    isImageFirst: false,
  },
  {
    id: 2,
    heading: "Concept and Attribute Impact Assessment",
    description:
      "At NuroUX, we harness the most advanced technologies to assess Concepts and Attributes for your brand. We employ diverse methodologies to scrutinize the consumer perspective and gauge the resonance these concepts create within your customer base.",
    btnName: "Try it out",
    image: impactAssessment,
    isImageFirst: true,
  },
  {
    id: 3,
    heading: "Packaging and Label Evaluation",
    description:
      "At NuroUX, our specialization lies in the assessment and enhancement of packaging, encompassing both its design intricacies and its impact on retail displays. We introduce the AOI Visual Relevance, an exclusive and robust algorithm developed by NuroUX. This innovation has emerged from a meticulous analysis of eye-tracking metrics drawn from over 500 packages assessed in the past decade. Its purpose is to ascertain the extent to which your packaging visually aligns with the communication objectives set by your brand.",
    btnName: "Try it out",
    image: labelEvaluation,
    isImageFirst: false,
  },
  {
    id: 4,
    heading: "Campaign Evaluation & Pre-Testing of Commercials",
    description:
      "At NuroUX, we employ superior methodologies to assess advertising campaigns, employing a blend of conventional market research approaches and cutting-edge Neuromarketing techniques. We delve into the psyche of your audience to gauge the influence and efficacy of each element comprising your advertising campaign or television commercial.",
    btnName: "Try it out",
    image: campaignEvaluation,
    isImageFirst: true,
  },
  {
    id: 5,
    heading: "Enhance sensory engagement",
    description:
      "Sensory marketing, also referred to as sensory-based marketing, is a segment within marketing that focuses on utilizing stimuli to enhance the sensory engagement of consumers or users, thereby elevating their overall experience. We amplify the potential of your sensory strategy:",
    btnName: "Try it out",
    image: sensoryEngagement,
    isImageFirst: false,
  },
  {
    id: 6,
    heading: "Consumer Neuro Segmentation",
    description:
      "Neuro Targeting or Neuro Segmentation is defined as the process of segmenting markets or consumers using neuroscientific tools. These tools enable the extraction of highly precise attributes from the personality of a cluster or target group in a scientific, profound, and unbiased manner. ",
    btnName: "Try it out",
    image: neuroSegmentation,
    isImageFirst: true,
  },
];
