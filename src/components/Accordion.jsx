import React from 'react';
import { Accordion, } from 'flowbite-react';

function MyAccordionComponent({ content }) {

    const customTheme = {
        root: {
            base: "divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700",
            flush: {
                off: "rounded-lg border",
                on: "border-b"
            }
        },
        content: {
            base: "p-12 first:rounded-t-lg last:rounded-b-lg dark:bg-red-900"
        },
        title: {
            arrow: {
                base: "h-6 w-6 shrink-0",
                open: {
                    off: "",
                    on: "rotate-180"
                }
            },
            base: "flex w-full items-center justify-between p-5 text-left font-medium text-gray-500 first:rounded-t-lg last:rounded-b-lg dark:text-gray-400",
            flush: {
                off: "hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800",
                on: "bg-transparent dark:bg-transparent"
            },
            heading: "",
            open: {
                off: "",
                on: "bg-gray-100 text-gray-900 dark:bg-red-800 dark:text-white"
            }
        }
    }

    return (
        <Accordion theme={customTheme}>
            {content.map((item, index) => {
                return (
                    <Accordion.Panel key={index}>
                        <Accordion.Title>{item.title}</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                {item.contentParagraph}
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                )
            })}
        </Accordion>
    );
}

export default MyAccordionComponent;


/* return (
        <Accordion collapseAll theme={  customTheme } title='base'>
            {content.map((item, index) => {
                return (
                    <Accordion.Panel key={index}>
                        <Accordion.Title>{item.title}</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                {item.contentParagraph}
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                )
            })}
        </Accordion>
    ); */