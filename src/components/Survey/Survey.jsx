import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const Survey = () => {
  const [activeTab, setActiveTab] = useState("students");
  const [isOpen, setIsOpen] = useState(true);

  const renderFormTab = () => {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Survey form</CardTitle>
          <CardDescription>
            Please select the relevant form to you and answer it below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="space-y-2"
          >
            <div className="flex items-center justify-between">
              <CollapsibleTrigger asChild>
                <Button variant="" size="sm" className="space-x-2 p-0 px-2">
                  {isOpen ? (
                    <>
                      <p>Hide form</p>
                      <FaChevronUp />
                    </>
                  ) : (
                    <>
                      <p>Show form</p>
                      <FaChevronDown />
                    </>
                  )}
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
              <Button variant="link" asChild>
                <a href={getFormLink()}>Open form in new tab</a>
              </Button>
            </div>
            <CollapsibleContent>
              <div className="flex h-screen justify-center">{renderForm()}</div>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
        <CardFooter>
          <p>
            Thank you for participating in our survey! Your feedback is greatly
            appreciated.
          </p>
        </CardFooter>
      </Card>
    );
  };

  const getFormLink = () => {
    if (activeTab === "students") {
      return "https://docs.google.com/forms/d/e/1FAIpQLSd7KLZLnKXBQOlRIOUUIaTCiy63QZdO-w1I-Ia8IUySIL2u7g/viewform";
    } else if (activeTab === "cs-experts") {
      return "https://docs.google.com/forms/d/e/1FAIpQLSfvpH7coUzdUeiLnryger31AT5hwQ3hy5_XfDbmy4IHIflQdQ/viewform";
    } else if (activeTab === "dentists") {
      return "https://docs.google.com/forms/d/e/1FAIpQLSf1L0DSCGqGR2SGMx4UPR5yrH3qjxq6nB6-7J0mquy-wsVzBA/viewform";
    }
  };

  const renderForm = () => {
    if (activeTab === "students") {
      return (
        <iframe
          src={`${getFormLink()}?embedded=true`}
          width="100%"
          height="100%"
        >
          Loading…
        </iframe>
      );
    } else if (activeTab === "cs-experts") {
      return (
        <iframe
          src={`${getFormLink()}?embedded=true`}
          width="100%"
          height="100%"
        >
          Loading…
        </iframe>
      );
    } else if (activeTab === "dentists") {
      return (
        <iframe
          src={`${getFormLink()}?embedded=true`}
          width="100%"
          height="100%"
        >
          Loading…
        </iframe>
      );
    }
  };

  return (
    <div className="flex justify-center p-4 text-zinc-950 dark:text-zinc-50">
      <div className="flex max-w-fit flex-col items-center">
        <h3 className="mb-4 text-center text-2xl font-bold sm:text-4xl">
          CariDent AI Medix Survey
        </h3>
        <p className="mb-6 max-w-3xl p-2 text-justify sm:text-lg">
          &emsp;&emsp;Hi! We are currently conducting research for our thesis
          titled:&nbsp;
          <b className="text-cyan-500">
            "CariDent AI Medix: A Convolutional Neural Network for Precise
            Identification of Dental Caries."
          </b>
          <br />
          <br />
          &emsp;&emsp; We are in need of{" "}
          <b>CS professionals, IT experts, and dentists.</b> We highly value
          your insights and opinions for our study. We have developed a mobile
          application and created a video demonstration of its main features.
          While the app is still in development, the video effectively showcases
          its core functionalities. We would greatly appreciate your
          participation in our software evaluation.
          <br />
          <br />
          &emsp;&emsp;We kindly ask you to spare us 5-10 minutes of your time to
          watch the video and provide your feedback. Your contributions will
          significantly aid us in refining our application and advancing dental
          caries detection technologies.
          <br />
          <br />
          &emsp;&emsp;Thank you very much for your time and consideration.
          <br />
          <br />
          Best regards,
          <br />
          <b className="text-cyan-500">Code Geass</b>
        </p>
        <div className="mb-6 w-full">
          <Card className="h-full w-full">
            <CardHeader>
              <CardTitle>System demonstration</CardTitle>
              <CardDescription>
                A short demonstration of how the system works
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video h-full">
                <iframe
                  src="https://www.youtube.com/embed/-ZSKYLzs7KY"
                  title="System Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  width="100%"
                  height="100%"
                >
                  Loading…
                </iframe>
              </div>
            </CardContent>
            <CardFooter>
              <p>Please answer our survey below afterwards.</p>
            </CardFooter>
          </Card>
        </div>
        <div className="mb-6 w-full">
          <Card className="h-full w-full">
            <CardHeader>
              <CardTitle>Try out our app for yourself!</CardTitle>
              <CardDescription>
                You need expo go to run the app. Scan the QR code below to try.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal space-y-2 pl-4 pt-2">
                <li>
                  <div>Install the Expo Go app on your device.</div>
                </li>
                <Button asChild>
                  <a href="https://expo.dev/go">Install Expo Go</a>
                </Button>
                <Accordion type="single" collapsible defaultValue="item-1">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <li>Scan the QR Code</li>
                    </AccordionTrigger>
                    <AccordionContent>
                      <img className="rounded-xl" src="/src/assets/app.png" />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </ol>
            </CardContent>
            <CardFooter>
              <p>Please answer our survey below afterwards.</p>
            </CardFooter>
          </Card>
        </div>
        <Tabs defaultValue="students" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger
              value="students"
              onClick={() => setActiveTab("students")}
            >
              Students
            </TabsTrigger>
            <TabsTrigger
              value="cs-experts"
              onClick={() => setActiveTab("cs-experts")}
            >
              CS/IT Experts
            </TabsTrigger>
            <TabsTrigger
              value="dentists"
              onClick={() => setActiveTab("dentists")}
            >
              Dentists
            </TabsTrigger>
          </TabsList>
          <TabsContent value="students">{renderFormTab()}</TabsContent>
          <TabsContent value="cs-experts">{renderFormTab()}</TabsContent>
          <TabsContent value="dentists">{renderFormTab()}</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Survey;
