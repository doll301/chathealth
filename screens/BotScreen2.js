import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Linking, TouchableOpacity } from "react-native";
import { Bubble, GiftedChat } from "react-native-gifted-chat";

import * as WebBrowser from 'expo-web-browser';
import { NavigationContainer } from '@react-navigation/native';

class ChatBot extends Component {
  state ={
    messages: [
    {
    _id: 1,
    text: "Welcome to Chat Health. Are you experiencing a medical emergency? Select 'Yes' to open the emergency dashboard.",
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'FAQ Bot',
      avatar: require("../assets/robot.png"),
    },
    quickReplies: {
      type: 'radio',
      keepIt: true,
      values: [
        {
          title: <Text style={{fontWeight: "bold"}}>Yes</Text>,
          value: '001',
        },
        {
          title: <Text style={{fontWeight: "bold"}}>No</Text>,
          value: '002',
        },
      ],
    }
  }
  ]
  };





 // onSend(messages = []) {
 //    this.setState(previousState => ({
 //      messages: GiftedChat.append(previousState.messages, messages)
 //
 //
 //    }));
 //  }

  onQuickReply(quickReply) {
      let message = quickReply[0].title;
      let msg = {
        _id: 1,
        text: message,
        createdAt: new Date(),
        user: {
          _id:1
        }
      }


      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, [msg]),
      }));

      if(quickReply[0].value == "001") {
        this.props.navigation.navigate('Emergency')
      } else if (quickReply[0].value == "002") {
        let reply = {
          _id: 1,
          text: "Are you experiencing symptoms of COVID-19? Symptoms may include, but are not limited to: \n\nTemperature of 100.4 degrees or higher \nChills \nNew onset cough \nTrouble breathing \nSore throat \nUnusual sinus pain \nNew loss of taste or smell \nNausea or vomiting \nMuscle or body aches \nExcessive fatigue \nDiarrhea",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: <Text style={{fontWeight: "bold"}}>Yes</Text>,
                value: '003',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>No</Text>,
                value: '004',
              },
            ],
          }
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));
      } else if (quickReply[0].value == "003") {
        let reply = {
          _id: 1,
          text: <Text onPress={() => Linking.openURL(`tel:${+13014054325}`)}>Please click this message to call the UMD HEAL line to speak with a University Health Center representative for instructions on how to proceed.</Text>,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));
      } else if (quickReply[0].value == "004") {
        let reply = {
          _id: 1,
          text: "What are you looking for help with today?",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: <Text style={{fontWeight: "bold"}}>COVID-19</Text>,
                value: '005',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>Physical Health</Text>,
                value: '006',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>Emotional/Behavioral Health</Text>,
                value: '007',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>Financial Wellness</Text>,
                value: '008',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>Sexual Health</Text>,
                value: '010',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>Pharmacy</Text>,
                value: '011',
              },
            ],
          }
        }

        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));

      } else if (quickReply[0].value == "005") {
        let reply = {
          _id: 1,
          text: <Text onPress={() => Linking.openURL(`tel:${+13014054325}`)}>If you are experiencing symptoms of COVID-19, please click this message to call the UMD HEAL line to speak with a University Health Center representative for instructions on how to proceed.{'\n'}{'\n'}Would you like to see available campus resources or ask a question about COVID-19?</Text>,
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: <Text style={{fontWeight: "bold"}}>See Resources</Text>,
                value: '0051',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>Ask a Question</Text>,
                value: '0052',
              },
            ],
          }
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));

      } else if (quickReply[0].value == "0051") {
        let reply = {
          _id: 1,
          text: "Select a resource to learn more.",
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: <Text style={{fontWeight: "bold"}}>Primary Care</Text>,
                value: '005101',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>HEAL Line</Text>,
                value: '005102',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>COVID Dashboard</Text>,
                value: '005103',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>Vaccine Info</Text>,
                value: '005104',
              },
            ],
          }
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));

      }else if (quickReply[0].value == "005101") {
        let reply = {
          _id: 1,
          text: <Text onPress={() => {WebBrowser.openBrowserAsync("https://health.umd.edu/medical-behavioral-health/primary-care")}}>The UMD Primary Care department offers regular check-ups, non-emergency health evaluations, and follow-up appointments for chronic conditions. Click this message to learn more.</Text>,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));
      }else if (quickReply[0].value == "005102") {
        let reply = {
          _id: 1,
          text: <Text onPress={() => {WebBrowser.openBrowserAsync("https://health.umd.edu/HEAL")}}>The UMD HEAL Line is available for students or employees who need to report a positive COVID-19 test, have potential symptoms of COVID-19, have been exposed to someone with COVID-19. Click this message to learn more.</Text>,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));
      }else if (quickReply[0].value == "005103") {
        let reply = {
          _id: 1,
          text: <Text onPress={() => {WebBrowser.openBrowserAsync("https://umd.edu/covid-19-dashboard")}}>The UMD COVID-19 Dashboard provides information about COVID-19 cases and testing on campus. Click this message to learn more.</Text>,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));
      }else if (quickReply[0].value == "005104") {
        let reply = {
          _id: 1,
          text: <Text onPress={() => {WebBrowser.openBrowserAsync("https://umd.edu/4Maryland/health/covid-19-vaccine")}}>The UMD COVID-19 Vaccine Information page shares information about vaccine requirements and exemptions, confirming your vaccination status to UMD, and getting COVID-19 vaccines on campus. Click this message to learn more.</Text>,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));
      } else if (quickReply[0].value == "0052") {
        let reply = {
          _id: 1,
          text: "What can I answer for you?",
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: <Text style={{fontWeight: "bold"}}>Do I have COVID-19 symptoms?</Text>,
                value: '005201',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>Which COVID-19 procedures are currently in place?</Text>,
                value: '005202',
              },

            ],
          }
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));

      }else if (quickReply[0].value == "005201") {
        let reply = {
          _id: 1,
          text: <Text onPress={() => Linking.openURL(`tel:${+13014054325}`)}>COVID-19 symptoms include, but are not limited to, a temperature of 100.4 degrees or higher, chills, trouble breathing, sore throat, unusual sinus pain, new loss of taste/smell, nausea or vomiting, muscle or body aches, excessive fatigue, and diarrhea.{'\n'}{'\n'}If you believe you have symptoms of COVID-19, please click this message to call the UMD HEAL line.</Text>,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));

      }else if (quickReply[0].value == "005202") {
        let reply = {
          _id: 1,
          text: <Text>Vaccination: COVID-19 vaccinations are required for all students, faculty and staff, and vaccine boosters are required by January 24 or within 14 days of becoming eligible.</Text>,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));
        let reply2 = {
          _id: 1,
          text: <Text>Masks: Wearing a mask indoors is required for everyone, regardless of vaccination status. There are additional situations when masks may be required.</Text>,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply2]),
        }));
        let reply3 = {
          _id: 1,
          text: <Text>Travel: The university’s travel guidance currently allows essential and non-essential travel within the United States, depending on your vaccination status. Restrictions are still in place for international travel.</Text>,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply3]),
        }));
        let reply4 = {
          _id: 1,
          text: <Text>Testing: Students, faculty and staff who are vaccinated do not need to be tested regularly. Community members who are unvaccinated need to be tested twice weekly regardless of exemption status.</Text>,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply4]),
        }));
        let reply5 = {
          _id: 1,
          text: <Text>Special Health Conditions: Individuals with a weakened or compromised immune system may need to continue to take precautions to maximally protect themselves.</Text>,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply5]),
        }));


      }else if (quickReply[0].value == "007") {
        let reply = {
          _id: 1,
          text: "If you are experiencing a psychiatric emergency, call 911 or go to your nearest hospital emergency department. \n\nWould you like to see available campus resources or ask a question about emotional and behavioral health?",
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: <Text style={{fontWeight: "bold"}}>See Resources</Text>,
                value: '0071',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>Ask a Question</Text>,
                value: '0072',
              },
            ],
          }
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));

      } else if (quickReply[0].value == "0071") {
        let reply = {
          _id: 1,
          text: "Select a health resource to learn more.",
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: <Text style={{fontWeight: "bold",}}>Behavioral Health Emergencies</Text>,
                value: '007101',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>Medication</Text>,
                value: '007102',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>ADHD</Text>,
                value: '007103',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>Eating Disorders</Text>,
                value: '007104',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>Transgender Health</Text>,
                value: '007105',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>Counseling</Text>,
                value: '007106',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>UMD CARE</Text>,
                value: '007107',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>Substance Use</Text>,
                value: '007108',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>Stress Management</Text>,
                value: '007109',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>Help Center</Text>,
                value: '007110',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>Wellness</Text>,
                value: '007111',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>Meditation</Text>,
                value: '007112',
              },
            ],
          }
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));

      }else if (quickReply[0].value == "007101") {
        let reply = {
          _id: 1,
          text: <Text onPress={() => {WebBrowser.openBrowserAsync("https://health.umd.edu/medical-behavioral-health-behavioral-health-services/behavioral-health-emergencies")}}>Behavioral Health Emergencies provides brief, initial meetings to assess and stabilize students going through urgent concerns, such as panic attacks, acute stressors, feeling suicidal, or being concerned about a friend/student at risk.</Text>,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));
      }else if (quickReply[0].value == "007102") {
        let reply = {
          _id: 1,
          text: <Text onPress={() => {WebBrowser.openBrowserAsync("https://health.umd.edu/medical-behavioral-health-behavioral-health-services/medication-management")}}>The Mental Health Service provides assessment for medication needs, ongoing medication management, and psychotherapy when needed to accompany medication management. Click this message to learn more.</Text>,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));
      }else if (quickReply[0].value == "007103") {
        let reply = {
          _id: 1,
          text: <Text onPress={() => {WebBrowser.openBrowserAsync("https://health.umd.edu/medical-behavioral-health-behavioral-health-services/adhd-treatment")}}>The Behavioral Health Service provides support to students struggling with ADHD symptoms. Click this message to learn more.</Text>,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));
      }else if (quickReply[0].value == "007104") {
        let reply = {
          _id: 1,
          text: <Text onPress={() => {WebBrowser.openBrowserAsync("https://health.umd.edu/medical-behavioral-health-behavioral-health-services/eating-disorders")}}>The University Health Center offers support for students struggling with eating concerns, body image, and/or excessive exercise. Click this message to learn more.</Text>,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));
      }else if (quickReply[0].value == "007105") {
        let reply = {
          _id: 1,
          text: <Text onPress={() => {WebBrowser.openBrowserAsync("https://health.umd.edu/HormoneTherapy")}}>The UHC offers appointments for students seeking hormone initiation and management. The Student Health Insurance plan includes coverage for gender confirmation procedures and treatments. Click this message to learn more.</Text>,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));
      }else if (quickReply[0].value == "007106") {
        let reply = {
          _id: 1,
          text: <Text onPress={() => {WebBrowser.openBrowserAsync("https://www.counseling.umd.edu/cs/#appointment")}}>The Counseling Service is staffed by licensed psychologists, and is the primary campus provider of free and confidential therapy to help UMD students manage personal, social, and academic challenges. Click this message to learn more.</Text>,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));
      }else if (quickReply[0].value == "007107") {
        let reply = {
          _id: 1,
          text: <Text onPress={() => {WebBrowser.openBrowserAsync("https://health.umd.edu/CARE")}}>CARE to Stop Violence provides free, confidential advocacy and therapy services to primary and secondary survivors of sexual assault, relationship violence, stalking, and sexual harassment (not an official reporting entity). Click this message to learn more.</Text>,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));
      }else if (quickReply[0].value == "007108") {
        let reply = {
          _id: 1,
          text: <Text onPress={() => WebBrowser.openBrowserAsync("https://health.umd.edu/medical-behavioral-health/substance-use-intervention-and-treatment-suit")}>Substance Use Intervention and Treatment (SUIT) can help any registered student who has concerns about alcohol and drug use of their own, a friend, roommate, or loved one. Click this message to learn more.</Text>,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));
      }else if (quickReply[0].value == "007109") {
        let reply = {
          _id: 1,
          text: <Text  onPress={() => WebBrowser.openBrowserAsync("https://health.umd.edu/wellness-advocacy/stress-management")}>The University Health Center offers stress management by appointment. Click this message to learn more.</Text>,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));
      }else if (quickReply[0].value == "007110") {
        let reply = {
          _id: 1,
          text: <Text  onPress={() => WebBrowser.openBrowserAsync("https://helpcenterumd.org/")}>Help Center is a student-run peer counseling and crisis intervention hotline that provides free and confidential help to the UMD community. Anyone can call and be connected to student counselors. Click this message to learn more.</Text>,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));
      }else if (quickReply[0].value == "007111") {
        let reply = {
          _id: 1,
          text: <Text onPress={() => WebBrowser.openBrowserAsync("https://health.umd.edu/wellness-advocacy/wellness-coaching")}>Students can book an appointment to work alongside a transed student Wellness Coach to identify values and strengths, set meaningful wellness goals, and co-create a plan to set goals into action. Click this message to learn more.</Text>,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));
      }else if (quickReply[0].value == "007112") {
        let reply = {
          _id: 1,
          text: <Text onPress={() => WebBrowser.openBrowserAsync("https://health.umd.edu/meditation")}>The UHC offers group meditations online daily and in person monthly during the spring semester. Click this message to learn more.</Text>,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));
      }else if (quickReply[0].value == "0072") {
        let reply = {
          _id: 1,
          text: <Text>What can I answer for you?</Text>,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: <Text style={{fontWeight: "bold",}}>What is emotional wellness?</Text>,
                value: '007201',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>Where is Behavioral Health Services?</Text>,
                value: '007202',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>What should I do if I, my friend, or a peer is feeling suicidal or having a behavioral health emergency?</Text>,
                value: '007203',
              },
            ],
          },
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));
      }else if (quickReply[0].value == "007201") {
        let reply = {
          _id: 1,
          text: <Text>Emotional wellness encompasses optimism, self-esteem, self-acceptance, and the ability to experience and cope with feelings independently and interpersonally. Emotional wellness includes: practicing self-care; fostering inner resources and resiliency; finding unique ways of coping with stressors; creating satisfying relationships; empathizing with others; being realistic about expectations and time; and knowing when to ask for help.</Text>,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));

      }else if (quickReply[0].value == "007202") {
        let reply = {
          _id: 1,
          text: <Text>UMD Behavioral Health Services is located at 2126 Campus Dr, College Park, MD.</Text>,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));

      }else if (quickReply[0].value == "007203") {
          let reply = {
            _id: 1,
            text: <Text>You should call 911 or the National Suicide Hotline at 800-273-8255. The UMD Behavioral Health Emergencies also has walk-in hours Monday through Friday from 9 AM to 5 PM at 2126 Campus Dr, College Park, MD 20740.</Text>,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'FAQ Bot',
              avatar: require("../assets/robot.png"),
            },
          }
          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, [reply]),
          }));

        }else if (quickReply[0].value == "008") {
          let reply = {
            _id: 1,
            text: "Would you like to see available campus resources or ask a question about financial wellness?",
            user: {
              _id: 2,
              name: 'FAQ Bot',
              avatar: require("../assets/robot.png"),
            },
            quickReplies: {
              type: 'radio',
              keepIt: true,
              values: [
                {
                  title: <Text style={{fontWeight: "bold"}}>See Resources</Text>,
                  value: '0081',
                },
                {
                  title: <Text style={{fontWeight: "bold"}}>Ask a Question</Text>,
                  value: '0082',
                },
              ],
            }
          }
          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, [reply]),
          }));

        }else if (quickReply[0].value == "0081") {
          let reply = {
            _id: 1,
            text: "Select a financial wellness resource to learn more.",
            user: {
              _id: 2,
              name: 'FAQ Bot',
              avatar: require("../assets/robot.png"),
            },
            quickReplies: {
              type: 'radio',
              keepIt: true,
              values: [
                {
                  title: <Text style={{fontWeight: "bold"}}>Financial Aid</Text>,
                  value: '008101',
                },
                {
                  title: <Text style={{fontWeight: "bold"}}>Money Matters</Text>,
                  value: '008102',
                },
                {
                  title: <Text style={{fontWeight: "bold"}}>Student Crisis Fund</Text>,
                  value: '008103',
                },
              ],
            }
          }
          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, [reply]),
          }));

        }else if (quickReply[0].value == "008101") {
          let reply = {
            _id: 1,
            text: <Text onPress={() => WebBrowser.openBrowserAsync("https://financialaid.umd.edu/")}>The UMD Financial Aid Office provides information to UMD students about financial aid and billing. Click this message to learn more.</Text>,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'FAQ Bot',
              avatar: require("../assets/robot.png"),
            },
          }
          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, [reply]),
          }));
        }else if (quickReply[0].value == "008102") {
          let reply = {
            _id: 1,
            text: <Text onPress={() => WebBrowser.openBrowserAsync("https://financialaid.umd.edu/resources-policies/money-matters")}>The Money Matters program provides UMD students with financial literacy resources, including information about saving for college, financial concepts, and credit cards. Click this message to learn more.</Text>,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'FAQ Bot',
              avatar: require("../assets/robot.png"),
            },
          }
          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, [reply]),
          }));
        }else if (quickReply[0].value == "008103") {
          let reply = {
            _id: 1,
            text: <Text onPress={() => WebBrowser.openBrowserAsync("http://sagiving.umd.edu/crisis/index.html")}>UMD Student Crisis Fund provides immediate assistance to any student who faces an unanticipated emergency financial need. Click this message to learn more.</Text>,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'FAQ Bot',
              avatar: require("../assets/robot.png"),
            },
          }
          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, [reply]),
          }));
        } else if (quickReply[0].value == "0082") {
          let reply = {
            _id: 1,
            text: "What can I answer for you?",
            user: {
              _id: 2,
              name: 'FAQ Bot',
              avatar: require("../assets/robot.png"),
            },
            quickReplies: {
              type: 'radio',
              keepIt: true,
              values: [
                {
                  title: <Text style={{fontWeight: "bold"}}>What is financial aid and what is it used for?</Text>,
                  value: '008201',
                },
                {
                  title: <Text style={{fontWeight: "bold"}}>What types of financial aid are available to me?</Text>,
                  value: '008202',
                },
                {
                  title: <Text style={{fontWeight: "bold"}}>How do I get financial aid?</Text>,
                  value: '008203',
                },
                {
                  title: <Text style={{fontWeight: "bold"}}>Where can I learn more about financial literacy resources at UMD?</Text>,
                  value: '008204',
                },

              ],
            }
          }
          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, [reply]),
          }));

        }else if (quickReply[0].value == "008201") {
            let reply = {
              _id: 1,
              text: <Text>Financial aid covers costs of education including tuition and university fees, room and meal plans, books and supplies, personal expenses and transportation costs. Some financial aid will need to be paid back and some does not need to be paid back. Loans, scholarships, grants and work-study are all types of financial aid. Financial aid can come from the university, the state government, the federal government or private sources.</Text>,
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'FAQ Bot',
                avatar: require("../assets/robot.png"),
              },
            }
            this.setState(previousState => ({
              messages: GiftedChat.append(previousState.messages, [reply]),
            }));

          }else if (quickReply[0].value == "008202") {
              let reply = {
                _id: 1,
                text: <Text onPress={() => WebBrowser.openBrowserAsync("https://financialaid.umd.edu/types-aid")}>There are a few different types of financial aid you may be eligible to receive, such as grants and scholarships, federal work-study, student loans, and graduate assistantships and fellowships. You can click on this message to read more.</Text>,
                createdAt: new Date(),
                user: {
                  _id: 2,
                  name: 'FAQ Bot',
                  avatar: require("../assets/robot.png"),
                },
              }
              this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, [reply]),
              }));

          } else if (quickReply[0].value == "008203") {
              let reply = {
                _id: 1,
                text: <Text>You must submit the Free Application for Federal Student Aid (FAFSA) each year to receive financial aid from the University of Maryland. By completing the FAFSA, you will be automatically considered for federal and university aid such as scholarships, grants, loans and work-study. Private scholarships, grants, and loans will have their own processes but some may also require you to submit the FAFSA.</Text>,
                createdAt: new Date(),
                user: {
                  _id: 2,
                  name: 'FAQ Bot',
                  avatar: require("../assets/robot.png"),
                },
              }
              this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, [reply]),
              }));

          } else if (quickReply[0].value == "008204") {
              let reply = {
                _id: 1,
                text: <Text onPress={() => WebBrowser.openBrowserAsync("https://financialaid.umd.edu/resources-policies/money-matters")}>The UMD Money Matters program provides students with financial literacy resources, including information about saving for college, financial concepts, and credit cards. You can click on this message to read more.</Text>,
                createdAt: new Date(),
                user: {
                  _id: 2,
                  name: 'FAQ Bot',
                  avatar: require("../assets/robot.png"),
                },
              }
              this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, [reply]),
              }));

      }else if (quickReply[0].value == "010") {
        let reply = {
          _id: 1,
          text: "Would you like to see available campus resources or ask a question about sexual health?",
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: <Text style={{fontWeight: "bold"}}>See Resources</Text>,
                value: '0101',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>Ask a Question</Text>,
                value: '0102',
              },
            ],
          }
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));

      }else if (quickReply[0].value == "0101") {
        let reply = {
          _id: 1,
          text: "Select a sexual health resource to learn more.",
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: <Text style={{fontWeight: "bold"}}>General Sexual Health</Text>,
                value: '010101',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>Self-STI Test</Text>,
                value: '010102',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>Women's Health Clinic</Text>,
                value: '010103',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>Men's Health Clinic</Text>,
                value: '010104',
              },

            ],
          }
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));

      }else if (quickReply[0].value == "010101") {
        let reply = {
          _id: 1,
          text: <Text onPress={() => WebBrowser.openBrowserAsync("https://health.umd.edu/wellness-advocacy/sexual-health")}>The Sexual Health program encourages sexual health and wellness by providing sexual health supplies (i.e. condoms, lube, safer sex kits, abstinence kits), peer education programs, free emergency contraception, as well as individual sexual health consultations about birth control, STI testing, and more. Click on this message to learn more.</Text>,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));
      }else if (quickReply[0].value == "010102") {
        let reply = {
          _id: 1,
          text: <Text onPress={() => WebBrowser.openBrowserAsync("https://myuhc.umd.edu")}>You can order a self-STI test from the UHC if you do not have symptoms. A two-week HIV test is provided for free, and you may request a rapid (next-day result) HIV test for $25 and Gonorrhea and Chlamydia tests for $28/site. You pay out of pocket and can access the STI Self-Test Clinic here. Click this message to learn more.</Text>,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));
      }else if (quickReply[0].value == "010103") {
        let reply = {
          _id: 1,
          text: <Text onPress={() => WebBrowser.openBrowserAsync("https://health.umd.edu/medical-behavioral-health/womens-health")}>Women's Health Services are staffed by physicians, nurse practitioners and physician assistants and specializes in care for people with a uterus, vagina, or breasts, regardless of gender identity. Click this message to learn more.</Text>,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));
      }else if (quickReply[0].value == "010104") {
        let reply = {
          _id: 1,
          text: <Text onPress={() => WebBrowser.openBrowserAsync("https://health.umd.edu/medical-behavioral-health/mens-health")}>Men's Health Services are staffed by physicians, nurse practitioners and physician assistants and specializes in care for people with a penis, testes, or a prostate regardless of gender identity. Click this message to learn more.</Text>,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));
      }else if (quickReply[0].value == "0102") {
        let reply = {
          _id: 1,
          text: "What can I answer for you?",
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: <Text style={{fontWeight: "bold"}}>When should I get an STI test?</Text>,
                value: '010201',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>What type of STI test should I receive?</Text>,
                value: '010202',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>How long after exposure should I get an STI test?</Text>,
                value: '010203',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>How mcuh does an STI test cost?</Text>,
                value: '010204',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>Who can I contact for help selecting an STI test?</Text>,
                value: '010205',
              },


            ],
          }
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));

      }else if (quickReply[0].value == "010201") {
          let reply = {
            _id: 1,
            text: <Text>The Centers for Disease Control and Prevention (CDC) recommend that sexually active individuals be STI screened at least once a year or in between new partners. Depending on risk, more frequent screening may be recommended. An open and honest dialogue with your healthcare provider will help to determine your risk, needs, and appropriate tests.</Text>,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'FAQ Bot',
              avatar: require("../assets/robot.png"),
            },
          }
          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, [reply]),
          }));

      }else if (quickReply[0].value == "010202") {
          let reply = {
            _id: 1,
            text: <Text>You should be routinely tested for HIV, Chlamydia, and Gonorrhea. Some STIs, like Chlamydia and Gonorrhea, are site specific. Depending on your behavior, throat and/or rectal swabs may be recommended for the most accurate testing. The CDC does not recommend herpes screening for people without symptoms. Recommended HPV screening begins for women at age 21 through a gynecological exam and pap testing. There is no recommended HPV screening tool for men without symptoms.</Text>,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'FAQ Bot',
              avatar: require("../assets/robot.png"),
            },
          }
          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, [reply]),
          }));

      }else if (quickReply[0].value == "010203") {
          let reply = {
            _id: 1,
            text: <Text>Wait ten days to two weeks after a potential STI exposure to get tested for the most accurate results. If a recent partner has tested positive for an STI, please contact a health care provider directly for instruction on the appropriate follow-up protocol.</Text>,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'FAQ Bot',
              avatar: require("../assets/robot.png"),
            },
          }
          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, [reply]),
          }));

      }else if (quickReply[0].value == "010204") {
          let reply = {
            _id: 1,
            text: <Text>Self-STI testing is billed out-of-pocket (to you directly, not your insurance). An HIV test with a two-week wait for results is free. Rapid HIV tests are $25, and Gonorrhea and Chlamydia tests cost $28 per site.</Text>,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'FAQ Bot',
              avatar: require("../assets/robot.png"),
            },
          }
          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, [reply]),
          }));

      }else if (quickReply[0].value == "010205") {
          let reply = {
            _id: 1,
            text: <Text>If you’re not sure which test is right for you, you can email Jenna B. Messman at jbeckwit@umd.edu for assistance in selecting the best service.</Text>,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'FAQ Bot',
              avatar: require("../assets/robot.png"),
            },
          }
          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, [reply]),
          }));

      }else if (quickReply[0].value == "011") {
        let reply = {
          _id: 1,
          text: "Would you like to see available campus resources or ask a question about the pharmacy?",
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: <Text style={{fontWeight: "bold"}}>See Resources</Text>,
                value: '0111',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>Ask a Question</Text>,
                value: '0112',
              },
            ],
          }
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));

      }else if (quickReply[0].value == "0111") {
        let reply = {
          _id: 1,
          text: <Text onPress={() => WebBrowser.openBrowserAsync("https://health.umd.edu/pharmacy ")}>UMD Pharmacy – The UMD Pharmacy provides pharmacy services for students, faculty, staff and their immediate family members. The Pharmacy also provides medication consultations upon request. Click on this message to learn more.</Text>,
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));

      }else if (quickReply[0].value == "0112") {
        let reply = {
          _id: 1,
          text: "What can I answer for you?",
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: require("../assets/robot.png"),
          },
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: <Text style={{fontWeight: "bold"}}>Where is the UMD pharmacy located?</Text>,
                value: '011201',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>What are the pharmacy’s hours of operation?</Text>,
                value: '011202',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>How can I fill my prescription at the pharmacy?</Text>,
                value: '011203',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>How can I refill my prescription at the pharmacy?</Text>,
                value: '011204',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>Which prescription insurance does the UMD pharmacy accept?</Text>,
                value: '011205',
              },
              {
                title: <Text style={{fontWeight: "bold"}}>What payment methods does the UMD pharmacy accept?</Text>,
                value: '011206',
              },

            ],
          }
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [reply]),
        }));

      }else if (quickReply[0].value == "011201") {
          let reply = {
            _id: 1,
            text: <Text>The UMD Pharmacy is in the main lobby of the University Health Center, which is located at 140 Campus Dr, College Park, MD 20740.</Text>,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'FAQ Bot',
              avatar: require("../assets/robot.png"),
            },
          }
          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, [reply]),
          }));

      }else if (quickReply[0].value == "011202") {
          let reply = {
            _id: 1,
            text: <Text>The UMD pharmacy is open Monday through Friday from 9 AM to 5 PM.</Text>,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'FAQ Bot',
              avatar: require("../assets/robot.png"),
            },
          }
          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, [reply]),
          }));

      }else if (quickReply[0].value == "011203") {
          let reply = {
            _id: 1,
            text: <Text>The pharmacy fills prescriptions from any (on- or off-campus) physician, dentist, or other medical provider. They accept prescriptions over the telephone and via fax directly from your provider's office, when legally permissible. At your request, the pharmacy can also call your provider's office for refills or new prescriptions and it can call other pharmacies to transfer your prescription(s) to our pharmacy.</Text>,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'FAQ Bot',
              avatar: require("../assets/robot.png"),
            },
          }
          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, [reply]),
          }));

      }else if (quickReply[0].value == "011204") {
          let reply = {
            _id: 1,
            text: <Text>There are two ways to refill your prescriptions. The first is to send the pharmacist a secure message through the patient portal (https://myuhc.umd.edu/). You can do this by clicking 'Messages,' 'New Message,' then 'Request a Prescription Refill' and completing the online form. Please allow 1-2 business days for your refill request to be completed. You may also contact the pharmacy by calling (301) 314-8167.</Text>,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'FAQ Bot',
              avatar: require("../assets/robot.png"),
            },
          }
          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, [reply]),
          }));

      }else if (quickReply[0].value == "011205") {
          let reply = {
            _id: 1,
            text: <Text>The pharmacy accepts many major prescription insurance plans including, but not limited to: SHIP (Student Health Insurance Plan), Caremark, Blue Cross Blue Shield, OptumRx, Aetna, Medco, Express Scripts, Maryland Medicaid, and Magellan.</Text>,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'FAQ Bot',
              avatar: require("../assets/robot.png"),
            },
          }
          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, [reply]),
          }));

      }else if (quickReply[0].value == "011206") {
          let reply = {
            _id: 1,
            text: <Text>The pharmacy accepts cash, check, Terrapin Express, student account, flexible spending account card, and credit/debit (Visa, Discover, American Express, and Mastercard).</Text>,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'FAQ Bot',
              avatar: require("../assets/robot.png"),
            },
          }
          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, [reply]),
          }));

      }




      }


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff', marginBottom: 0,}}>
        <Image
          source={require("../assets/chatbotheader.png")}
          resizeMode="stretch"
          style={{ width: "100%", top: 60, zIndex: 3, marginTop: 0,}}
        />
        <TouchableOpacity
          style={styles.backbuttonwrapper}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.backbutton}>◀︎ Home</Text>
        </TouchableOpacity>
        <Text style={styles.general_health_tips}>
          Beta Bot
        </Text>

        <GiftedChat
          messages={this.state.messages}
          quickReply={this.state.messages.quickReplies}
          style={{borderWidth: 0,}}
          quickReplyStyle={{backgroundColor: "#fff"}}
          minComposerHeight={0}
          maxComposerHeight={0}
          minInputToolbarHeight={0}
          renderInputToolbar={() => null}
          onSend={messages => this.onSend(messages)}
          onQuickReply={quickReply => this.onQuickReply(quickReply)}

          user={{
            _id: 1
          }}
        />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  backbuttonwrapper: {
    marginTop: 45,
    marginLeft: 13,
    height: 24,
    width: 80,
    borderRadius: 40,
    backgroundColor: "#7d7d7d",
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "flex-start",
    position: "absolute",
    zIndex: 10,
  },
  backbutton: {
    color: "white",
    fontSize: 14,
    paddingHorizontal: 13,
  },

  general_health_tips: {
    position: "absolute",
    top: 55,
    left: 0,
    width: "100%",
    fontSize: 22,
    textAlign: "center",
    zIndex: 5,
  },
  blue_banner: {
    marginTop: 0,
    backgroundColor: "#CAE7F8",
    width: "100%",
    height: 30,
    padding: 3,
    alignItems: "center",
  },
});

export default ChatBot;
