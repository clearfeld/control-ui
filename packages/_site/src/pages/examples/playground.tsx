/* eslint-disable @typescript-eslint/no-explicit-any */
import * as stylex from "@stylexjs/stylex";

import { Button, ButtonVariants } from "@controlkit/button";
import { Input } from "@controlkit/input";
import { Label } from "@controlkit/label";
import { H6 } from "@controlkit/headings";

import { Range } from "@controlkit/range";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@controlkit/dialog";

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@controlkit/command-menu";

import { useState } from "react";
import { Textarea } from "@controlkit/textarea";
import { CodeBlock } from "@controlkit/code-block";
import { Popover, PopoverContent, PopoverTrigger } from "@controlkit/popover";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@controlkit/dropdown-menu";

const styles = stylex.create({
    base: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        position: "absolute",
    },

    navbar: {
        height: "3rem",
        borderBottom: "0.0625rem solid var(--border-color)",
        padding: "0 1rem",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
    },


    close_pos: {
        top: "0.5rem",
        right: "0.5rem",
    },
});

export function Playground() {
    const [temperature, setTemperature] = useState<number>(0.5);
    const [maxlen, setMaxLen] = useState<number>(256);
    const [topp, setTopp] = useState<number>(0.8);

    const [view, setView] = useState<1 | 2 | 3>(1);

    return (
        <div {...stylex.props(styles.base)}>
            <nav {...stylex.props(styles.navbar)}>
                <H6>Playground</H6>

                <div
                    style={{
                        display: "flex",
                        gap: "0.5rem",
                    }}
                >
                    <LoadAPreset />

                    <Save />
                    <ViewCode />
                    <Share />
                    <MoreOptions />
                </div>
            </nav>

            <div
                style={{
                    padding: "1rem",
                    height: "100%",
                    display: "grid",
                    gridTemplateColumns: "80% 20%",
                }}
            >
                {view === 1 && (
                    <div
                        style={{
                            height: "100%"
                        }}
                    >
                        <Textarea
                            placeholder="Write a tagline for an ice cream shop."
                            style={{
                                height: "100%"
                            }}
                        />
                    </div>
                )}

                {view === 2 && (
                    <div
                        style={{
                            height: "100%",
                            display: "flex",
                            gap: "1rem",
                        }}
                    >
                        <Textarea
                            placeholder="Write a tagline for an ice cream shop."
                            style={{
                                height: "100%"
                            }}
                        />

                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                backgroundColor: "var(--color-bg-compliment)",
                                border: "0.0625rem solid var(--border-color)",
                                borderRadius: "0.25rem",
                            }}
                        />
                    </div>
                )}

                {view === 3 && (
                    <div
                        style={{
                            height: "100%",
                            display: "flex",
                            gap: "1rem",
                            boxSizing: "border-box",
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                gap: "1.75rem",
                            }}
                        >
                            <div
                                style={{
                                    height: "calc(90% - 1.5rem)",
                                }}
                            >
                                <Label>Input</Label>
                                <Textarea
                                    placeholder="Write a tagline for an ice cream shop."
                                    style={{
                                        height: "100%",
                                    }}
                                />
                            </div>

                            <div
                                style={{
                                    height: "calc(10% - 1.5rem)",
                                }}
                            >
                                <Label>Instructions</Label>
                                <Textarea
                                    placeholder="Write a tagline for an ice cream shop."
                                    style={{
                                        height: "100%",
                                    }}
                                />
                            </div>
                        </div>

                        <div
                            style={{
                                marginTop: "1.375rem",
                                width: "100%",
                                height: "calc(100% - 1.375rem)",
                                backgroundColor: "var(--color-bg-compliment)",
                                border: "0.0625rem solid var(--border-color)",
                                borderRadius: "0.25rem",
                            }}
                        />
                    </div>
                )}

                <div
                    style={{
                        padding: "0 1rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                    }}
                >
                    <Label>Mode</Label>
                    <div
                        style={{ display: "flex" }}
                    >
                        <Button variant={ButtonVariants.GHOST} onClick={() => { setView(1) }}>V1</Button>
                        <Button variant={ButtonVariants.GHOST} onClick={() => { setView(2) }}>V2</Button>
                        <Button variant={ButtonVariants.GHOST} onClick={() => { setView(3) }}>V3</Button>
                    </div>

                    <Label>Model</Label>
                    <ModelSelect />

                    <div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: "0.5rem",
                            }}
                        >
                            <Label>Temperature</Label>
                            <span>{temperature}</span>
                        </div>
                        <Range
                            defaultValue={[temperature]}
                            min={0}
                            max={1.0}
                            step={0.1}
                            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
                            onValueChange={(e: any) => { setTemperature(e); }}
                        />
                    </div>

                    <div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: "0.5rem",
                            }}
                        >
                            <Label>Maximun Length</Label>
                            <span>{maxlen}</span>
                        </div>
                        <Range
                            defaultValue={[maxlen]}
                            min={0}
                            max={4000}
                            step={1}
                            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
                            onValueChange={(e: any) => { setMaxLen(e); }}
                        />
                    </div>

                    <div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: "0.5rem",
                            }}
                        >
                            <Label>Top P</Label>
                            <span>{topp}</span>
                        </div>
                        <Range
                            defaultValue={[topp]}
                            min={0}
                            max={1.0}
                            step={0.1}
                            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
                            onValueChange={(e: any) => { setTopp(e); }}
                        />
                    </div>
                </div>
            </div>

            <div
                style={{
                    padding: "0 1rem 1rem 1rem",
                }}
            >
                <Button>Submit</Button>
            </div>
        </div>
    );
}

function LoadAPreset() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={ButtonVariants.ACTION}
                    style={{
                        width: "34rem",
                    }}
                >
                    Load a preset
                </Button>
            </PopoverTrigger>

            <PopoverContent
                style={{
                    width: "34rem",
                }}
                side={"bottom"}
            >
                <Command>
                    <CommandInput placeholder="Search presets..." />

                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Examples">
                            <CommandItem>
                                <span>Grammatical Standard English</span>
                            </CommandItem>
                            <CommandItem>
                                <span>Summarize for a 2nd grader</span>
                            </CommandItem>
                            <CommandItem>
                                <span>Text to command</span>
                            </CommandItem>
                            <CommandItem>
                                <span>Q&A</span>
                            </CommandItem>
                            <CommandItem>
                                <span>English to other languages</span>
                            </CommandItem>
                            <CommandItem>
                                <span>Parse unstructured data</span>
                            </CommandItem>
                            <CommandItem>
                                <span>Classification</span>
                            </CommandItem>
                            <CommandItem>
                                <span>Natural language to Python</span>
                            </CommandItem>
                            <CommandItem>
                                <span>Explain code</span>
                            </CommandItem>
                            <CommandItem>
                                <span>Chat</span>
                            </CommandItem>
                            <CommandItem>
                                <span>More examples</span>
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}

function Save() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant={ButtonVariants.ACTION}
                >
                    Save
                </Button>
            </DialogTrigger>
            <DialogContent
                style={{
                    padding: "0 1rem 1rem 1rem",
                }}
            >
                <DialogHeader>
                    <DialogTitle>Save preset</DialogTitle>
                    <DialogDescription>
                        This will save the current playground state as a preset which you can access later or share with others.
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                        />
                    </div>

                    <br />

                    <div>
                        <Label htmlFor="username">Description</Label>

                        <Input
                            id="username"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

function ViewCode() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant={ButtonVariants.ACTION}
                >
                    View code
                </Button>
            </DialogTrigger>
            <DialogContent
                style={{
                    padding: "0 1rem 1rem 1rem",
                }}
            >
                <DialogHeader>
                    <DialogTitle>View Code</DialogTitle>
                    <DialogDescription>
                        You can use the following code tos tart intergrating your current prompt and settings into your application.
                    </DialogDescription>
                </DialogHeader>

                <div>
                    <div>
                        <CodeBlock
                            language="python"
                            languageModule={import("shiki/langs/python.mjs")}
                            // theme="light"
                            code={`import os
import openai

openai.api_key = os.getenv("OPENAI_API_KEY")

response = openai.Completion.create(
    model="davinci",
    prompt="",
    temperature=0.9,
    max_tokens=5,
    top_p=1,
    frequency_penalty=0,
    presence_penalty=0,
)`}
                        />

                    </div>

                    <br />

                    <div>
                        Your API key can be found here. You should use environment variables or a secret management tool to expose your key to your applications.
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

function Share() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={ButtonVariants.ACTION}
                >
                    Open Botton
                </Button>
            </PopoverTrigger>

            <PopoverContent
                style={{
                    width: "34rem",
                }}
                side={"bottom"}
            >
                <div
                    style={{
                        border: "0.0625rem solid var(--border-color)",
                        backgroundColor: "var(--color-bg)",
                        // height: "20rem",
                        borderRadius: "0.25rem",
                        padding: "1rem"
                    }}
                >
                    <H6>Share preset</H6>
                    <span
                        style={{
                            fontSize: "0.875rem",
                            color: "var(--text-sub-color)",
                        }}
                    >
                        Anyone who has this link and an OpenAI account will be able to view this.
                    </span>

                    <div style={{ padding: "0.5rem" }} />

                    <div>
                        <Input />
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}

function MoreOptions() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                asChild
                style={{
                    width: "2rem",
                }}
            >
                <Button variant={ButtonVariants.ACTION}>Hor</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                style={{
                    width: "18rem",
                    marginLeft: "-14rem"
                }}
            >
                <DropdownMenuItem>Content filter preferences</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Delete preset</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

function ModelSelect() {
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>("");

    return (
        <Popover
            open={open}
            onOpenChange={setOpen}
        >
            <PopoverTrigger asChild>
                <Button
                    variant={ButtonVariants.ACTION}
                    style={{
                        width: "14.5rem",
                    }}
                    role="combobox"
                    aria-expanded={open}
                >
                    {value === "" ? "Select framework..." : value}
                    {/* <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
                </Button>
            </PopoverTrigger>

            <PopoverContent
                style={{
                    width: "14.5rem",
                }}
                side={"bottom"}
            >
                <Command>
                    <CommandInput placeholder="Search models..." />

                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="GPT-3">
                            <CommandItem
                                value={"text-davinci-003"}
                                onSelect={(currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue);
                                    setOpen(false);
                                }}
                            >
                                <span>text-davinci-003</span>
                            </CommandItem>
                            <CommandItem
                            value={"text-curie-001"}
                            onSelect={(currentValue) => {
                                setValue(currentValue === value ? "" : currentValue);
                                setOpen(false);
                            }}>
                                <span>text-curie-001</span>
                            </CommandItem>
                            <CommandItem
                            value={"text-babbage-001"}
                            onSelect={(currentValue) => {
                                setValue(currentValue === value ? "" : currentValue);
                                setOpen(false);
                            }}>
                                <span>text-babbage-001</span>
                            </CommandItem>
                            <CommandItem
                            value={"text-ada-001"}
                            onSelect={(currentValue) => {
                                setValue(currentValue === value ? "" : currentValue);
                                setOpen(false);
                            }}>
                                <span>text-ada-001</span>
                            </CommandItem>
                        </CommandGroup>
                        <CommandGroup heading="Codex">
                            <CommandItem
                            value={"code-davinci-002"}
                            onSelect={(currentValue) => {
                                setValue(currentValue === value ? "" : currentValue);
                                setOpen(false);
                            }}>
                                <span>code-davinci-002</span>
                            </CommandItem>
                            <CommandItem
                            value={"code-cushman-001"}
                            onSelect={(currentValue) => {
                                setValue(currentValue === value ? "" : currentValue);
                                setOpen(false);
                            }}>
                                <span>code-cushman-001</span>
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
