/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Minjee Song",
  title: "Hi all, I'm 송민지",
  subTitle: emoji(
    "새로운 도전을 좋아하고 적응을 잘하는 신입 백앤드 개발자입니다🚀"
  ),
  resumeLink:
    "https://special-coneflower-a75.notion.site/3ee867c5941b40cfb296771018b8e116", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

const aboutMe = {
  display: true,
  subtitle: "5년간의 미국생활",
  contents: [
    "2018년 대학 졸업 후, 개발인턴으로 미국에 갔습니다.",
    "비록 예상과는 달리 UX/UI 디자인과 서비스 기획 분야의 일을 하게되었으나, 업무에 몰입하고 시간을 투자하는 과정 자체에서 큰 즐거움을 발견했습니다.",
    "특히, 개발자와 긴밀하게 협력하며 무형의 아이디어를 현실로 만드는 개발 과정에 매력을 느꼈습니다.",
    <br />,
    "사실, 사용자 중심의 디자인과 시장 동향에 대해 배우는 것도 흥미롭고 가치 있는 일이었지만, 개발에 대한 미련은 항상 마음 한켠에 남아 있었습니다.",
    "한국으로 돌아오면서, 저는 이 미련을 새로운 시작으로 바꾸기로 결심했습니다.",
    <br />,
    "개발자라고 해서 단순히 '어떤 기능을 구현하는 사람'이 아니라 다양한 사람들과의 커뮤니케이션을 하고, 내가 지금 하는 일을 왜 하는지 파악할 줄 알아야 한다고 생각합니다.",
    "아직은 개발 경험이 부족할지라도, 지속적으로 성장하고 발전하는 개발자가 되고자 합니다."
  ]
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/smjteresa95",
  linkedin: "https://www.linkedin.com/in/minjee-song-64a128147",
  gmail: "minjeesong95@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "https://medium.com/@minjeesong95",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I can do",
  subTitle: "저는 이런 것을 해봤어요.",
  skills: [
    emoji("⚡ Java & Spring Boot"),
    "RESTful API 개발: Spring Boot을 활용한 RESTful 서비스 구축. 클라이언트와 서버 간의 원활한 통신 관리.",
    "데이터베이스 통합: Spring Data JPA를 통해 MySQL 및 H2 데이터베이스 연동.",
    "테스트 자동화: JUnit 등의 테스팅 프레임워크를 사용한 단위 및 통합 테스트 수행",
    "Spring MVC: 모델-뷰-컨트롤러 패턴을 적용한 웹 애플리케이션 구축.",

    emoji("⚡ Selenium"),
    " Java와 Python을 사용한 웹 크롤링 스크립트 및 데이터베이스 연동 작업."
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "jira",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "프론트엔드(Html, CSS, JS, React)", //Insert stack or technology you have experience in
      desc: "초기 레이아웃 설정에 부트스트랩을 사용하고, 보다 상세한 디자인 조정은 CSS를 통해 수행할 수 있습니다. Thymeleaf와 Mustache 같은 템플릿 문법을 사용하여 데이터를 원하는 위치에 정확하게 삽입할 수 있습니다. React를 활용하여 재사용 가능한 컴포넌트를 만어 사용자 인터페이스를 구축할 수 있습니다.",
      progressPercentage: "35%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Java & Spring Boot",
      desc: "기본적인 CRUD기능을 구현이 가능하며, 데이터 관리와 처리가 필요한 웹 애플리케이션을 개발할 수 있습니다. Spring Boot의 Controller를 활용하여 RESTful API를 설계하고 구현 할 수 있습니다.",
      progressPercentage: "80%"
    },
    {
      Stack: "Python",
      desc: " Python 스크립트를 활용하여 웹사이트에서 데이터를 크롤링하고, OCR과 같은 API를 사용하여 수집한 데이터의 전처리 및 데이터베이스 저장 시스템 개발 경험이 있습니다.",
      progressPercentage: "45%"
    },
    {
      Stack: "데이터베이스 관리(MySQL, JPA, SQLAlchemy)",
      desc: "기본 쿼리문을 사용하여 데이터와 상호작용할 수 있습니다. 대부분의 프로젝트에서 MySQL을 사용했습니다.",
      progressPercentage: "65%"
    },
    {
      Stack: "협업도구활용(Github, Jira, Slack)",
      desc: "효율적인 팀 협업을 위한 Git-Flow 브랜치 전략을 채택, 주간 회의를 통한 스프린트 계획 수립 및 데일리 스크럼으로 팀원들과 진행 상황 공유했습니다.",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "정보통신공학 전공",
      // logo: require("./assets/images/harvardLogo.png"),
      subHeader: "순천향대학교",
      duration: "2014.03 - 2019.02",
      desc: "C, C++, 컴퓨터 네트워크, 디지털 시스템설계, 통신회로설계"
    },
    {
      schoolName: "네이버 클라우드 AIaaS 개발자 과정",
      // logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "비트캠프",
      duration: "2023.03 - 2023.09",
      sections: [
        {
          title: "Java & Spring Boot",
          descBullets: [
            {
              content:
                "REST API 개발을 통해 서버와 클라이언트 간의 효율적인 통신 구현 및 웹 어플리케이션 구축."
            }
          ]
        },
        {
          title: "데이터베이스 관리 (MySQL, JPA)",
          descBullets: [
            {content: "MySQL을 사용하여 데이터베이스를 설계하고 구축."},
            {content: "JPA를 활용하여 객체-관계 매핑 및 CRUD 연산을 구현"}
          ]
        },
        {
          title: "프론트엔드 개발 (HTML, JavaScript, React)",
          descBullets: [
            {content: "React를 활용한 동적 웹 페이지 개발"},
            {content: "HTML과 JavaScript를 사용하여 사용자 인터페이스 설계"}
          ]
        },
        {
          title: "협업 도구 활용 (Github, Jira, Slack)",
          descBullets: [
            {content: "Github으로 버전 관리 및 협업 경험"},
            {content: "Jira와 Notion을 활용한 프로젝트 관리 및 문서화 작업"},
            {content: "Slack을 통한 팀 커뮤니케이션 및 협업"}
          ]
        },
        {
          title: "프로젝트 경험",
          descBullets: [
            {content: "프로젝트 명 : KKINI"},
            {content: "기간 : 2023.08 ~ 2023.09"},
            {
              content:
                "기술스택 : Spring Boot, Java, Python, React, JavaScript, MySQL, NCloud, Spring Security, Docker, Jenkins, Jira, Slack, Agile"
            },
            {
              content: "나의 역할 : ",

              subBullets: [
                {
                  content:
                    "상품 데이터 스크래핑: 서비스에 필요한 상품 데이터를 웹에서 스크래핑하여 수집"
                },
                {
                  content:
                    "데이터 추출 및 가공: 이미지로부터 필요한 정보를 OCR API을 이용해 추출, 얻어 온 데이터를 필요에 맞게 가공."
                },
                {content: "데이터베이스 테이블 설계"},
                {
                  content:
                    "랭킹 리스트 API 개발: 영양성분을 기준으로 상품 랭킹 리스트를 제공하는 API 개발."
                },
                {
                  content:
                    "관리자 페이지 개발: 상품 정보 관리를 위한 관리자 페이지 구축."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  subtitle:
    "5년간 해외에서 경험을 쌓으며 다양한 업무 환경에 능숙하게 적응하는 능력을 발전시켰습니다.",
  experience: [
    {
      role: "Product Manager",
      company: "GNS USA",
      date: "Centreville, VA | Jun 2018 - Sep 2019(1 yr 3 mon)",
      desc: "Spearheaded designated driver app(Greego; 대리운전) development planning and facilitated communication between publishers and developers.",
      descBullets: [
        "IOS & android application UX/UI design, Company website UX/UI design",
        "Performed application quality assurance and test process.",
        "Setting up AWS guard duty due to suspicious IP addresses. And visualizing guard duty logs within the VPC instance"
      ],
      footerLink: [
        {
          name: "App Store",
          url: "https://apps.apple.com/us/developer/greego-inc/id1319499917"
        }
      ]
    },
    {
      role: "Operations Manager",
      company: "Enter Construction",
      date: "Fairfax, VA | Sep 2019 – Mar 2023(3 yr 6 mon)",
      desc: "Manage and perform overall office paperwork; Prepares cost estimates for roofing projects and services. Analyzes documentation to prepare time, cost, materials, and labor estimates. Take off, ordering materials.",
      descBullets: [
        "Negotiate building cost with the insurance company, Facilitating communication between the public adjuster and clients.",
        "Prepared legal documents between GC and the customers to prevent legal conflict.",
        "Implementing a new system according to company operating policy changes by bringing in new software and programs."
      ],
      footerLink: [
        {
          name: "Letter of Recommendation",
          url: "https://drive.google.com/file/d/1Fnv6JlHwnTcYBToFSz69dVYdXeXu5TmR/view?usp=sharing"
        }
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/kkini.png"),
      projectName: "Kkini(끼니)",
      projectDesc:
        "소비자의 선호와 영양 성분 요구에 따른 맞춤형 간편식 선택 서비스",
      techStack:
        "Spring Boot 3.1.3, Java 17, Python 3.11.7, React, JavaScript, MySQL, NCloud, Spring Security, Docker, Jenkins, Jira, Slack, Agile",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://kkini.net"
        },
        {
          name: "Source Code",
          url: "https://github.com/ProjectKinni"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "상품 데이터 관리 및 크롤링 시스템 ",
      projectDesc:
        "보완 한 Kkini project의 일부로, 대규모 식품 데이터를 효율적으로 관리하고 실시간으로 웹 크롤링을 통해 상품 정보를 수집하는 시스템입니다.",
      techStack: "python 3.12.0, selenium 4.15.2, Ncloud S3",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/smjteresa95/kkini-product-data/tree/develop"
        }
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Dining Review API", 
      projectDesc:
        "Codecademy에서 Java, Spring boot 과정 수강 후 음식점 리뷰 API를 만들었습니다.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/smjteresa95/Naver-Cloud-OCR-API/tree/main"
        }
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "OCR을 이용한 영양성분 데이터 추출 스크립트",
      projectDesc: [
        "초기 Kkini project의 일부로, 처음으로 작성해 본 Python script 입니다. ",
        <br />,
        <br />,
        " Naver Clova의 OCR (Optical Character Recognition) API를 사용하여 영양성분표 이미지에서 필요한 데이터를 추출하고 가공하는 Python 스크립트 기반의 프로젝트입니다. ",
        <br />,
        <br />,
        "데이터베이스에 저장된 영양성분표 이미지를 분석하여 중요한 영양 정보를 자동으로 식별하고 추출합니다. ",
        <br />,
        "추출된 데이터는 필요에 맞게 가공되어 다시 데이터베이스에 저장됩니다."
      ],
      techStack: "Naver Clova OCR, Python 3.11.6, MySQL",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/smjteresa95/Naver-Cloud-OCR-API/tree/main"
        }
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "크롤링",
      projectDesc:
        "초기 KKINIproject의 일부로 다수의 상품 판매 사이트에서 상품 정보를 스크래핑하여 DB에 저장합니다",
      techStack: "Maven 4.0.0, Spring Boot 3.1.2, Java 17, MySQL",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/smjteresa95/Crawling-Selenium"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "국비지원교육 외 개발 공부를 하면서 수강한 과정입니다.",

  achievementsCards: [
    {
      title: "Learn Java",
      subtitle: "Codecademy",
      description:
        "부트캠프 수강 중 기본적인 자바학습을 추가로 병행하였습니다.",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1oPQXUK2VSwf1lnBOq1aN6Bv0hOSXnk19/view?usp=sharing"
        }
      ]
    },
    {
      title: "Create REST APIs with Spring and Java",
      subtitle: "Codecademy",
      description:
        "부트캠프 수강 전 예습차원에서 수강한 과정입니다. HTTP, REST 그리고 CRUD에 대한 개념을 익히고 Spring framework로 웹 API구축하는 법을 학습했습니다.",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1VdjpHWLeZ_fSASDUJk3pvdTzuuPM1wr7/view?usp=sharing"
        },
        {
          name: "Project",
          url: "https://github.com/smjteresa95/Dining-Review"
        }
      ]
    },
    {
      title: "How to Transform Tables with SQL",
      subtitle: "Codecademy",
      description: "데이터 조작을 위한 SQL을 추가로 학습하였습니다.",
      footerLink: [{name: "Certification", url: ""}]
    },
    {
      title: "AWS Cloud Technical Essentials",
      subtitle: "Coursera",
      description:
        "Web application 배포실습을 통해 AWS 서비스의 전반적인 이해를 익히고있습니다.",
      footerLink: [
        {
          name: "In Progress",
          url: "https://www.coursera.org/learn/aws-cloud-technical-essentials/"
        }
      ]
    },
    {
      title: "Build Python Web Apps with Flask",
      subtitle: "Codecademy",
      description:
        "가격비교 API를 만들기 위해서 Python과 Flask를 학습하고 있습니다.",
      footerLink: [
        {
          name: "In Progress",
          url: "https://www.codecademy.com/enrolled/paths/build-python-web-apps-flask"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "저의 개발공부 기록지입니다.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@minjeesong95/project-kkini-%EB%8D%B0%EC%9D%B4%ED%84%B0%EA%B0%80-%ED%95%84%EC%9A%94%ED%95%A9%EB%8B%88%EB%8B%A4-0c35abdfa189",
      title: "Project Kkini | 데이터가 필요합니다.",
      description:
        "프로젝트에 사용할 식품 영양성분 데이터 수집: Selenium과 OCR API 활용 및 DB 테이블 구성과 변경"
    },
    {
      url: "https://medium.com/@minjeesong95/project-kkini-jira%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%ED%98%91%EC%97%85-1feab2fbc57e",
      title: "Project Kkini | Jira를 활용한 협업",
      description: "프로젝트를 진행하면서 이런식으로 협업을 했어요."
    },
    {
      url: "https://medium.com/@minjeesong95/list/java-2c5c061ff7f2",
      title: "Java Basic",
      description: "Codecademy와 부트캠프에서 배운 내용을 기술했습니다."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "조직의 성장과 함께 나아가며 기술적 역량을 발휘하고자 하는 신입개발자 송민지입니다.",
  number: "+82 010-2145-9504",
  email_address: "minjeesong95@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  aboutMe,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
