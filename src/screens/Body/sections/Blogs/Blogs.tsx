import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const blogPosts = [
  {
    date: "April 4, 2025",
    readTime: "10 Minutes",
    title:
      "Three States, Six Days, 1855 Miles, 22 Coin Shops, and a Rare Glimpse Inside Dansco's Operations",
    multiline: true,
  },
  {
    date: "March 2, 2025",
    readTime: "4",
    title: "AI Coin Analysis Takes Another Step Forward - Live Video Analysis",
    multiline: true,
  },
  {
    date: "October 7, 2024",
    readTime: "1 Minute",
    title: "Major Breakthrough In AI Coin Analysis",
    multiline: false,
  },
  {
    date: "August 23, 2024",
    readTime: "3 Minutes",
    title: "Musings From An Amateur Numismatic Researcher",
    multiline: true,
  },
  {
    date: "June 29, 2024",
    readTime: "1 Minute",
    title: "Coin World Podcast: The Dansco Dude Abides",
    multiline: false,
  },
];

export const BackgroundByAnima = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center bg-blogbg">
      <div className="flex max-w-[1215px] w-full items-start justify-between py-12 px-0 relative">
        <div className="relative w-full max-w-[450px]">
          <div className="bg-gradient-to-r from-[rgba(177,108,234,1)] via-[rgba(255,94,105,1)] to-[rgba(255,168,75,1)] bg-clip-text text-transparent text-[length:var(--justinhinh-webflow-io-semantic-heading-6-upper-font-size)] leading-[var(--justinhinh-webflow-io-semantic-heading-6-upper-line-height)] font-justinhinh-webflow-io-semantic-heading-6-upper font-[number:var(--justinhinh-webflow-io-semantic-heading-6-upper-font-weight)] tracking-[var(--justinhinh-webflow-io-semantic-heading-6-upper-letter-spacing)] whitespace-nowrap [font-style:var(--justinhinh-webflow-io-semantic-heading-6-upper-font-style)]">
            BLOG
          </div>

          <h2 className="mt-10 font-justinhinh-webflow-io-semantic-heading-2 font-[number:var(--justinhinh-webflow-io-semantic-heading-2-font-weight)] text-[#ffffff] text-[length:var(--justinhinh-webflow-io-semantic-heading-2-font-size)] tracking-[var(--justinhinh-webflow-io-semantic-heading-2-letter-spacing)] leading-[var(--justinhinh-webflow-io-semantic-heading-2-line-height)] whitespace-nowrap [font-style:var(--justinhinh-webflow-io-semantic-heading-2-font-style)]">
            Latest Posts
          </h2>

          <div className="mt-6 flex items-center">
            <Button
              variant="link"
              className="p-0 h-auto text-[#ffffff] text-[16.9px] [font-family:'Inter',Helvetica] font-normal tracking-[0] leading-[18px]"
            >
              View all
            </Button>
            <ChevronRightIcon className="ml-4 w-3.5 h-[13px] text-[#ffffff]" />
          </div>
        </div>

        <div className="flex flex-col w-full max-w-[693px] items-start gap-[40px]">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="w-full border-0 border-b border-[#ffffff4c] rounded-none bg-transparent pb-6 last:border-b-0"
            >
              <CardContent className="p-0">
                <div className="mt-4">
                  {post.multiline ? (
                    <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#ffffff] text-[27px] tracking-[0] leading-9">
                      {post.title.split(" - ").map((part, i) => (
                        <React.Fragment key={i}>
                          {part}
                          {i < post.title.split(" - ").length - 1 && " -"}
                          <br />
                        </React.Fragment>
                      ))}
                    </h3>
                  ) : (
                    <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#ffffff] text-[27px] tracking-[0] leading-9 whitespace-nowrap">
                      {post.title}
                    </h3>
                  )}
                </div>

                <div className="mt-6 flex items-center">
                  <Button
                    variant="link"
                    className="p-0 h-auto text-[#ffffff] text-[17.7px] [font-family:'Inter',Helvetica] font-normal tracking-[0] leading-[18px]"
                  >
                    Read
                  </Button>
                  <ChevronRightIcon className="ml-4 w-3.5 h-[13px] text-[#ffffff]" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};