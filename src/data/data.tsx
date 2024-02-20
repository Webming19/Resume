import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';


// 页面元数据
export const homePageMeta: HomepageMeta = {
  title: '前端开发工程师-韩晓东',
  description: "使用React Resume Template构建",
};
// 定义
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;
export const SectionIdName = {
  Hero: 'Hero部分',
  About: '关于我',
  Contact: '联系方式',
  Portfolio: '参与项目',
  Resume: '个人简历',
  Skills: '个人技能',
  Stats: '统计数据',
  Testimonials: 'TA人评价',
};
// hero 部分
export const heroData: Hero = {
  imageSrc: heroImage,
  name: '韩晓东',
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        我是一名位于山东青岛的<strong className="text-stone-100">前端开发工程师</strong>，
        目前在<strong className="text-stone-100">文达通科技股份有限公司</strong>工作。
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        主要工作为构建稳定可扩展的前端脚手架，编写高可用的组件，并参与项目开发。
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        闲暇时间，我会研究智能家具、玩会游戏，或是探索祖国的大好河山。
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: '简历',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: '联系方式',
      primary: false,
    },
  ],
};
// 个人介绍
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: '一名前端开发人员，负责组内项目工程化和组件编写工作。',
  aboutItems: [
    {label: '位置', text: '山东 / 青岛', Icon: MapIcon},
    {label: '年龄', text: '1997/01', Icon: CalendarIcon},
    {label: '籍贯', text: '山东 / 青岛', Icon: FlagIcon},
    {label: '兴趣', text: '游山玩水、智能家具、Switch', Icon: SparklesIcon},
    {label: '本科', text: '河南理工大学', Icon: AcademicCapIcon},
    {label: '工作', text: '文达通股份有限公司', Icon: BuildingOffice2Icon},
  ],
};
// 技能部分
export const skills: SkillGroup[] = [
  {
    name: '前端开发',
    skills: [
      {
        name: 'Vue',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'Svelte',
        level: 4,
      },
    ],
  },
  {
    name: '移动端开发',
    skills: [
      {
        name: '微信小程序',
        level: 6,
      },
      {
        name: 'uni-app',
        level: 6,
      },
      {
        name: 'React Native',
        level: 1,
      },
    ],
  },
  {
    name: '后端开发',
    skills: [
      {
        name: 'Node',
        level: 5,
      },
      {
        name: 'Nest',
        level: 5,
      },
      {
        name: 'Rust',
        level: 1,
      },
    ],
  },
  {
    name: '语言能力',
    skills: [
      {
        name: '汉语',
        level: 10,
      },
      {
        name: '英语',
        level: 2,
      },
      {
        name: '其他',
        level: 0,
      },
    ],
  },
];
// 项目部分
export const portfolioItems: PortfolioItem[] = [
  {
    title: '项目标题 1',
    description: '在这里给出你的项目的简短描述。',
    url: '',
    image: porfolioImage1,
  },
];
// 教育经历 -- TODO: 标准化简历联系格式或提供 MDX
export const education: TimelineItem[] = [
  {
    date: '2015/09-2019/07',
    location: '河南理工大学',
    title: '本科',
    content: <p>计算机二级、计算机三级</p>,
  },
];
// 工作经历
export const experience: TimelineItem[] = [
  {
    date: '2019/07-2021/10',
    location: '北京中科锐景科技有限公司',
    title: '前端开发工程师',
    content: (<p>环保、林业部门的大屏项目及后台管理项目的前端开发。</p>),
  },
  {
    date: '2021/11-至今',
    location: '文达通科技股份有限公司',
    title: '前端开发工程师',
    content: (<p>前端脚手架构建和维护、规范制定、编写高可用组件、参与项目开发。</p>),
  },
];
// TA人评价
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: '武子康',
      text: '基于DevOps的合作非常愉快。',
      image: '/images/testimonial/169.jpg',
    },
  ],
};

// 联系方式
export const contact: ContactSection = {
  headerText: '保持联系。',
  description: '有什么问题请给我留言，也可以通过一下方式联系我。',
  items: [
    {
      type: ContactType.Email,
      text: 'ethanhan2023@foxmail.com',
      href: 'mailto:ethanhan2023@foxmail.com',
    },
    {
      type: ContactType.Location,
      text: '中国 | 山东 | 青岛',
      href: 'https://www.google.ca/maps/place/中国山东省青岛市/@36.136235,120.2000287,11z',
    },
    {
      type: ContactType.Twitter,
      text: '@EthanHan',
      href: 'https://twitter.com/ethan_han1071',
    },
    {
      type: ContactType.Github,
      text: 'EthanHan',
      href: 'https://github.com/Webming19',
    },
  ],
};
// 社交链接
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Webming19'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/21751650/ethan-han'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://maimai.cn/profile/detail?dstu=232422492'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/ethan_han1071'},
];
