import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { DivSiteMobileMenuIcon } from './DivSiteMobileMenuIcon.js';
import { Heading2Icon2 } from './Heading2Icon2.js';
import { Heading2Icon3 } from './Heading2Icon3.js';
import { Heading2Icon } from './Heading2Icon.js';
import { ImageIcon2 } from './ImageIcon2.js';
import { ImageIcon3 } from './ImageIcon3.js';
import { ImageIcon } from './ImageIcon.js';
import classes from './Website.module.css';

interface Props {
  className?: string;
}
/* @figmaId 101:77 */
export const Website: FC<Props> = memo(function Website(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.divColMd10}>
        <div className={classes.heading1}>
          <div className={classes.machineIntelligence}>
            <div className={classes.textBlock}>Synergizing Healthcare </div>
            <div className={classes.textBlock2}>Services and Affective Computing using Deep Learning</div>
          </div>
        </div>
      </div>
      <div className={classes.jULY3rd9thIITIndoreIndia}>JULY 3rd-9th, IIT Indore, India</div>
      <div className={classes.kARYASHALA}>KARYASHALA</div>
      <div className={classes.link}>
        <div className={classes.registration}>
          <a href='https://google.com' target='_blank' rel='noreferrer' className={classes.textBlock3}>
            Registration
          </a>
        </div>
      </div>
      <div className={classes.divContainer}>
        <div className={classes.heading2}>
          <div className={classes.courseHighlights}>
            <div className={classes.textBlock4}>Course</div>
            <div className={classes.textBlock5}>Highlights</div>
          </div>
        </div>
        <div className={classes.pseudo}></div>
        <div className={classes.divColLg11}>
          <div className={classes.p}>
            <div className={classes.thisShortTermCourseIsFocusedOn}>
              This short-term course is focused on recent advancements in the areas of Machine learning and Deep
            </div>
            <div className={classes.learningItAimsToCoverTopicsRan}>
              learning. It aims to cover topics ranging from key fundamental concepts to the recent research directions
            </div>
            <div className={classes.inTheseAreasFurthermoreItWillE}>
              in these areas. Furthermore, it will empower the attendees to utilize the modern deep learning tools in
            </div>
            <div className={classes.solvingRealWorldProblemsInclud}>
              <p className={classes.labelWrapper}>
                <span className={classes.label}>solving real-world problems including </span>
                <span className={classes.label2}>Speech Recognition </span>
                <span className={classes.label3}>, </span>
                <span className={classes.label4}>Face Recognition</span>
                <span className={classes.label5}>, </span>
                <span className={classes.label6}>Image Classification</span>
                <span className={classes.label7}> and</span>
              </p>
            </div>
            <div className={classes.videoAnalyticsTheCourseHighlig}>
              <p className={classes.labelWrapper2}>
                <span className={classes.label8}>Video Analytics</span>
                <span className={classes.label9}>. The course highlights are:</span>
              </p>
            </div>
          </div>
          <div className={classes.list}>
            <div className={classes.itemDataprocessingOfImageAudio}>Dataprocessing of image, audio and videos</div>
            <div className={classes.itemPresentingFundamentalTopic}>
              Presenting fundamental topics in Machine Learning
            </div>
            <div className={classes.itemKernelMethodsInSVM}>Kernel methods in SVM</div>
            <div className={classes.itemExplainingNeuralNetworkDee}>
              Explaining Neural Network &amp; Deep Learning using Tensorflow
            </div>
            <div className={classes.item}>
              <div className={classes.understandingEssentialRecentAn}>
                <div className={classes.textBlock6}>
                  Understanding essential recent and exploring possible future research directions for image, audio and
                </div>
                <div className={classes.textBlock7}>videos processing</div>
              </div>
            </div>
            <div className={classes.itemHandsOnSessionsWithPython}>Hands-on sessions with Python</div>
          </div>
        </div>
      </div>
      <div className={classes.divContainer2}>
        <div className={classes.heading22}>
          <div className={classes.whatDoWeHaveForYou}>
            <div className={classes.textBlock8}>What do we have</div>
            <div className={classes.textBlock9}>for you?</div>
          </div>
          <div className={classes.pseudo2}></div>
        </div>
        <div className={classes.divRow}>
          <div className={classes.divColMd6}>
            <div className={classes.heading23}>
              <div className={classes.linkCollaborate}>
                <p className={classes.labelWrapper3}>
                  <span className={classes.label10}>Collaborate</span>
                  <span className={classes.label11}> </span>
                </p>
              </div>
              <div className={classes.icon}>
                <Heading2Icon className={classes.icon2} />
              </div>
            </div>
            <div className={classes.p2}>
              <div className={classes.learnInteractAndOpportunityToC}>
                <div className={classes.textBlock10}>Learn, Interact and opportunity to</div>
                <div className={classes.textBlock11}>collaborate with renowned</div>
                <div className={classes.textBlock12}>academicians</div>
              </div>
            </div>
          </div>
          <div className={classes.divColMd62}>
            <div className={classes.heading24}>
              <div className={classes.linkUnderstand}>
                <p className={classes.labelWrapper4}>
                  <span className={classes.label12}>Understand</span>
                  <span className={classes.label13}> </span>
                </p>
              </div>
              <div className={classes.icon3}>
                <Heading2Icon2 className={classes.icon4} />
              </div>
            </div>
            <div className={classes.p3}>
              <div className={classes.understandTheInherentProblemsW}>
                <div className={classes.textBlock13}>Understand the inherent problems with</div>
                <div className={classes.textBlock14}>modern algorithms and potential ways</div>
                <div className={classes.textBlock15}>to improve them</div>
              </div>
            </div>
          </div>
          <div className={classes.divColMd63}>
            <div className={classes.heading25}>
              <div className={classes.linkHandsOn}>
                <p className={classes.labelWrapper5}>
                  <span className={classes.label14}>Hands-on</span>
                  <span className={classes.label15}> </span>
                </p>
              </div>
              <div className={classes.icon5}>
                <Heading2Icon3 className={classes.icon6} />
              </div>
            </div>
            <div className={classes.p4}>
              <div className={classes.projectBasedLearningOnLatestTr}>
                <div className={classes.textBlock16}>Project-based learning on latest</div>
                <div className={classes.textBlock17}>trends of Machine Learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.divContainer3}>
        <div className={classes.heading26}>
          <div className={classes.registrationInformation}>
            <div className={classes.textBlock18}>Registration</div>
            <div className={classes.textBlock19}>Information</div>
          </div>
          <div className={classes.pseudo3}></div>
        </div>
        <div className={classes.list2}>
          <div className={classes.item2}>
            <div className={classes.theParticipantsCanRegisterAndM}>
              <p className={classes.labelWrapper6}>
                <span className={classes.label16}>The participants can register and make the payment using this </span>
                <span className={classes.label17}>link</span>
              </p>
            </div>
          </div>
          <div className={classes.item3}>
            <div className={classes.noteThatInOrderToCompleteTheRe}>
              <div className={classes.textBlock20}>
                Note that in order to complete the registration you need to fill the Google form and pay the fee on
              </div>
              <div className={classes.textBlock21}>the Paytm link.</div>
            </div>
          </div>
          <div className={classes.item4}>
            <div className={classes.facultyMembersFromAICTEApprove}>
              Faculty members from AICTE approved engineering colleges (QIP Category)
            </div>
            <div className={classes.list3}>
              <div className={classes.item5}>
                <div className={classes.theCourseIsForFreeOfCostForQIP}>
                  <p className={classes.labelWrapper7}>
                    <span className={classes.label18}>The course is for </span>
                    <span className={classes.label19}>free of cost </span>
                    <span className={classes.label20}>for QIP category participants</span>
                  </p>
                </div>
              </div>
              <div className={classes.itemHoweverTheyNeedToDepositAR}>
                However they need to deposit a refundable fee of Rs.1000
              </div>
              <div className={classes.item6}>
                <div className={classes.theyWillBePaidAC3TierTrainFare}>
                  <div className={classes.textBlock22}>
                    They will be paid AC 3 tier train fare for travel by the shortest route from the place of work to
                  </div>
                  <div className={classes.textBlock23}>Indore and back. The maximum TA payable is Rs.3000</div>
                </div>
              </div>
              <div className={classes.itemTheyWillBeProvidedWithFree}>
                They will be provided with free boarding and lodging on campus
              </div>
              <div className={classes.itemLocalQIPParticipantsWillBe}>
                Local QIP participants will be paid TA of Rs. 300 per day for 5 days
              </div>
            </div>
          </div>
          <div className={classes.itemOthersNonQIPCategory}>Others (Non-QIP Category)</div>
          <div className={classes.list4}>
            <div className={classes.itemTheCourseFeeForNonQIPCateg}>
              The course fee for Non-QIP category participants is Rs. 4000 (inclusive of GST)
            </div>
            <div className={classes.item7}>
              <div className={classes.nonQIPCategoryParticipantsCanA}>
                <div className={classes.textBlock24}>
                  Non-QIP category participants can arrange their accommodation on their own or can contact us
                </div>
                <div className={classes.textBlock25}>
                  beforehand for lodging facilities on the college campus, at a nominal charge
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.divContainer4}>
        <div className={classes.heading27}>
          <div className={classes.aboutQIP}>About QIP</div>
          <div className={classes.pseudo4}></div>
        </div>
        <div className={classes.p5}>
          <div className={classes.theQualityImprovementProgramme}>
            The Quality Improvement Programme (QIP) was launched by the Government of India in 1970. Since its
          </div>
          <div className={classes.inceptionTheProgrammeHasBeenEn}>
            inception the programme has been endeavouring to improve the quality of technical education in the
          </div>
          <div className={classes.countryTheMainObjectiveOfThePr}>
            country. The main objective of the programme is to upgrade the expertise and capabilities of teachers of
          </div>
          <div className={classes.theAICTEApprovedDegreeLevelEng}>
            the AICTE approved degree-level engineering institutions.
          </div>
        </div>
      </div>
      <div className={classes.divContainer5}>
        <div className={classes.heading28}>
          <div className={classes.ourTeam}>Our Team</div>
          <div className={classes.pseudo5}></div>
        </div>
        <div className={classes.divRow2}>
          <div className={classes.divTestimony}>
            <div className={classes.linkFigurePuneetJPG}></div>
            <div className={classes.blockquote}>
              <div className={classes.link2}>
                <div className={classes.drPuneetGuptaAssistantProfesso}>
                  <div className={classes.textBlock26}>Dr.Puneet Gupta</div>
                  <div className={classes.textBlock27}>Assistant Professor</div>
                  <div className={classes.textBlock28}>(CSE IIT Indore)</div>
                </div>
              </div>
              <div className={classes.coordinator}>Coordinator</div>
              <div className={classes.p6}>
                <div className={classes.computerVisionDeepLearningImag}>
                  <div className={classes.textBlock29}>Computer Vision, Deep Learning,</div>
                  <div className={classes.textBlock30}>Image Processing, Adversarial</div>
                  <div className={classes.textBlock31}>Attacks and Defenses</div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.divTestimony2}>
            <div className={classes.linkFigureSpJpg}></div>
            <div className={classes.blockquote2}>
              <div className={classes.link3}>
                <div className={classes.drSuryaPrakashAssociateProfess}>
                  <div className={classes.textBlock32}>Dr.Surya Prakash</div>
                  <div className={classes.textBlock33}>Associate Professor and Head</div>
                  <div className={classes.textBlock34}>(CSE IIT Indore)</div>
                </div>
              </div>
              <div className={classes.guestSpeaker}>Guest Speaker</div>
              <div className={classes.p7}>
                <div className={classes.biometricsMachineLearningDeepL}>
                  <div className={classes.textBlock35}>Biometrics, Machine Learning, Deep</div>
                  <div className={classes.textBlock36}>Learning, Pattern Recognition,</div>
                  <div className={classes.textBlock37}>Computer Vision, Image Processing</div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.divTestimony3}>
            <div className={classes.linkFigureVJpg}></div>
            <div className={classes.blockquote3}>
              <div className={classes.link4}>
                <div className={classes.drVivekKanhangadAssociateProfe}>
                  <div className={classes.textBlock38}>Dr.Vivek Kanhangad</div>
                  <div className={classes.textBlock39}>Associate Professor</div>
                  <div className={classes.textBlock40}>(EE IIT Indore)</div>
                </div>
              </div>
              <div className={classes.guestSpeaker2}>Guest Speaker</div>
              <div className={classes.p8}>
                <div className={classes.biometricsDigitalSignalProcess}>
                  <div className={classes.textBlock41}>Biometrics, Digital Signal</div>
                  <div className={classes.textBlock42}>Processing, Image Processing</div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.divTestimony4}>
            <div className={classes.linkFigureSoJpeg}></div>
            <div className={classes.blockquote4}>
              <div className={classes.link5}>
                <div className={classes.drSomnathDeyAssociateProfessor}>
                  <div className={classes.textBlock43}>Dr.Somnath Dey</div>
                  <div className={classes.textBlock44}>Associate Professor</div>
                  <div className={classes.textBlock45}>(CSE IIT Indore)</div>
                </div>
              </div>
              <div className={classes.guestSpeaker3}>Guest Speaker</div>
              <div className={classes.p9}>
                <div className={classes.humanComputerInteractionImageP}>
                  <div className={classes.textBlock46}>Human Computer Interaction, Image</div>
                  <div className={classes.textBlock47}>Processing, Computer Graphics,</div>
                  <div className={classes.textBlock48}>Biometric Security</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        <div className={classes.divRow3}>
          <div className={classes.iframe}>
            <div className={classes.body}>
              <div className={classes.divMapDiv}>
                <div className={classes.div}>
                  <div className={classes.divGmStyle}>
                    <div className={classes.regionMap}>
                      <div className={classes.vt}></div>
                      <div className={classes.vt2}></div>
                      <div className={classes.vt3}></div>
                      <div className={classes.vt4}></div>
                      <div className={classes.vt5}></div>
                      <div className={classes.vt6}></div>
                    </div>
                    <div className={classes.div2}>
                      <div className={classes.divPlaceCard}>
                        <div className={classes.divPlaceName}>
                          <div className={classes.indianInstituteOfTechnology}>Indian Institute Of Technology</div>
                        </div>
                        <div className={classes.divAddress}>
                          <div className={classes.khandwaRdSimrolMadhya}>Khandwa Rd, Simrol, Madhya</div>
                          <div className={classes.pradesh453552}>Pradesh 453552</div>
                        </div>
                        <div className={classes.divReviewBox}>
                          <div className={classes._45}>4.5</div>
                          <div className={classes.imgRated45OutOf5}>
                            <div className={classes.divIcon}></div>
                            <div className={classes.divIcon2}></div>
                            <div className={classes.divIcon3}></div>
                            <div className={classes.divIcon4}></div>
                            <div className={classes.divIcon5}></div>
                          </div>
                          <div className={classes.link460Reviews460Reviews}>460 reviews</div>
                        </div>
                        <div className={classes.linkViewLargerMapViewLargerMap}>View larger map</div>
                      </div>
                    </div>
                    <div className={classes.div3}>
                      <div className={classes.buttonZoomIn}>
                        <div className={classes.image}>
                          <div className={classes.image2}>
                            <ImageIcon className={classes.icon7} />
                          </div>
                        </div>
                      </div>
                      <div className={classes.div4}></div>
                      <div className={classes.buttonZoomOut}>
                        <div className={classes.image3}>
                          <div className={classes.image4}>
                            <ImageIcon2 className={classes.icon8} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.image5}>
                      <div className={classes.image6}>
                        <ImageIcon3 className={classes.icon9} />
                      </div>
                    </div>
                    <div className={classes.div5}>
                      <div className={classes.divGmStyleCc}>
                        <div className={classes.div6}></div>
                        <div className={classes.linkReportAMapError}>Report a map error</div>
                      </div>
                      <div className={classes.divGmStyleCc2}>
                        <div className={classes.div7}></div>
                        <div className={classes.buttonKeyboardShortcutsKeyboar}>Keyboard shortcuts</div>
                      </div>
                      <div className={classes.divGmStyleCc3}>
                        <div className={classes.div8}></div>
                        <div className={classes.mapData2023}>Map data ©2023</div>
                      </div>
                      <div className={classes.divGmnoprint}>
                        <div className={classes.div9}></div>
                        <div className={classes.linkTermsOfUse}>Terms of Use</div>
                      </div>
                    </div>
                    <button className={classes.buttonShowSatelliteImagery}>
                      <div className={classes.divGmInsetMapImpl}>
                        <div className={classes.div10}>
                          <div className={classes.regionMap2}></div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.divColMd4}>
            <div className={classes.heading2ConnectWithUs}>Connect with Us</div>
            <div className={classes.divP4}>
              <div className={classes.address}>Address</div>
              <div className={classes.pMb4}>
                <div className={classes.room411POD1AScandiumBuildingCS}>
                  <div className={classes.textBlock49}>Room 411, POD-1A (Scandium</div>
                  <div className={classes.textBlock50}>Building), CSE, IIT Indore, Simrol</div>
                  <div className={classes.textBlock51}>453552, India</div>
                </div>
              </div>
              <div className={classes.phone}>Phone</div>
              <div className={classes.link917312438700EXT805}>+91-7312438700 (EXT-805)</div>
              <div className={classes.emailAddress}>Email Address</div>
              <div className={classes.linkMachineIntelligenceIitiAcI}>MachineIntelligence@iiti.ac.in</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.bannerHeading1Link}>
        <div className={classes.iITIndore}>
          <p className={classes.labelWrapper8}>
            <span className={classes.label21}>IIT</span>
            <span className={classes.label22}>Indore</span>
          </p>
        </div>
      </div>
      <div className={classes.divSiteMobileMenu}>
        <div className={classes.icon10}>
          <DivSiteMobileMenuIcon className={classes.icon11} />
        </div>
      </div>
      <div className={classes.frame1321315293}></div>
    </div>
  );
});
