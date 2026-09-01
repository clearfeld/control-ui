import * as stylex from "@stylexjs/stylex";
// import InstallationBlock from "../commons/installation-block";
import { H1, H2, H3, H4, H5 } from "@controlkit/headings";

import { CheckCircleIcon, CloseCircleIcon } from "@controlkit/icons";
import ContentsSidebar from "./commons/contents_sidebar";
import { useRef } from "react";
import { styles } from "./_layout/styles";

const languagePageStyles = stylex.create({
	wrapper: {
		margin: "2rem",
		placeItems: "center",
		display: "grid",
		rowGap: "2rem",
	},
	section: {
		display: "grid",
		rowGap: "1rem",
	},

	tiles: {
		gap: "2rem",
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
		paddingBottom: "2rem",
	},

	card: {
		padding: "1rem",
		borderStyle: "solid",
		borderBottomWidth: "0rem",
		borderLeftWidth: "0rem",
		borderRightWidth: "0rem",
		borderTopWidth: "0.25rem",
	},
	success: {
		borderColor: "#82b536",
		backgroundColor: "#28311b",
	},
	error: {
		borderColor: "#f15b50",
		backgroundColor: "#42221f",
	},
	cardTitle: {
		gap: "1rem",
		alignItems: "center",
		display: "inline-flex",
		fontSize: "1.5rem !important",
		lineHeight: "2rem !important",
	},

	bulletList: {
		marginTop: "0rem",
	},
});

function CustomCard({
	error = false,
	children
}: & {error?: boolean, children: React.ReactNode}) {
	return (
		<div
			{...stylex.props(
				languagePageStyles.card,
				error ? languagePageStyles.error : languagePageStyles.success
			)}
			>
			<b {...stylex.props(languagePageStyles.cardTitle)}>
				{error ? <CloseCircleIcon fill="#f15b50" width="2.5rem" height="2.5rem" /> : <CheckCircleIcon width="2.5rem" height="2.5rem" fill="#82b536"/>}
				{error ? "Don't" : "Do"}
			</b>

			<div>
				{children}
			</div>
		</div>
	)
}

export default function Tokens() {
	const divRef = useRef<HTMLDivElement>(null);
	return (
		<div
			{...stylex.props(languagePageStyles.wrapper)}
			ref={divRef}
		>
			<div {...stylex.props(styles.threeColumnLayout)}>
				<ContentsSidebar ref={divRef} />
				<div {...stylex.props(styles.middleColumn)}>
					<div {...stylex.props(languagePageStyles.section)}>
						<H1>Style, grammar, and punctuation</H1>
						<span>Follow these writing conventions to make your apps and experiences clear, consistent, and localizable.</span>
					</div>

					<div {...stylex.props(languagePageStyles.section)}>
						<H2 id="top">Style and formatting</H2>

						<H3 id="abbreviations">Abbreviations</H3>
						<ul {...stylex.props(languagePageStyles.bulletList)}>
							<li>Use the full name of features and apps in customer-facing copy.</li>
							<li>Don't use 'e.g.', 'i.e.', 'etc.', or '&' as they're not localization friendly and can be confusing for users of assistive technologies.</li>
						</ul>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>Ask the experts at Control Design.</CustomCard>
							<CustomCard error={true}>Ask the experts at CD.</CustomCard>
							</div>
							<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>Use an input component. For example, a button or a select.</CustomCard>
							<CustomCard error={true}>Use an input component, e.g. a button or a select etc.</CustomCard>
						</div>

						<H4 id="pluralAbbreviations">Plural abbreviations</H4>
						<span>Don't use an apostrophe for plural abbreviations.</span>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>1990s, DVDs</CustomCard>
							<CustomCard error={true}>1990's, DVD's</CustomCard>
						</div>

						<H3 id="articles">Articles (a, an, the)</H3>
						<span>Avoid articles in buttons, labels, and action-based headings in the UI.</span>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>Create password</CustomCard>
							<CustomCard error={true}>Create a password</CustomCard>
						</div>

						<H3 id="bold">Bold</H3>
						<span>Use bold text to draw the reader's eye to key phrases and statements in your content, though don't over do it.</span>
						<ul {...stylex.props(languagePageStyles.bulletList)}>
							<li>For in-app copy or help articles, use bold when referring to static UI elements like menu items, buttons, or headings.</li>
							<li>If bold is needed but the UI doesn't support it — for example in a UI message or a flag where the title is already bold — you can use italics.</li>
						</ul>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>Go to <b>General configuration</b> then <b>User macros.</b></CustomCard>
							<CustomCard error={true}>Go to the <b>settings page and select Configuration</b>.</CustomCard>
						</div>

						<H3 id="capitalization">Capitalization</H3>
						<ul {...stylex.props(languagePageStyles.bulletList)}>
							<li>Use sentence case in all titles, headings, menu items, labels, and buttons.</li>
							<li>Capitalize proper nouns in headings, such as names of people, companies, or apps.</li>
						</ul>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>Create work item</CustomCard>
							<CustomCard error={true}>Create Work Item</CustomCard>
							</div>
							<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>Add permissions for Arni Karan</CustomCard>
							<CustomCard error={true}>Add permissions for arni karan</CustomCard>
						</div>

						<H3 id="contractions">Contractions (shortened words)</H3>
						<ul {...stylex.props(languagePageStyles.bulletList)}>
							<li>Use contractions, where possible, as they convey a conversational, friendly tone.</li>
							<li>
								Use curly apostrophes in UI copy
								<ul>
									<li>On a Mac: <b>option + shift + ]</b></li>
									<li>On Windows: <b>Control + ' (or alt + 0146)</b></li>
								</ul>
							</li>
						</ul>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>We can't load this page.</CustomCard>
							<CustomCard error={true}>We cannot load this page.</CustomCard>
						</div>

						<H3 id="Gender">Gender (he, she, they)</H3>
						<ul {...stylex.props(languagePageStyles.bulletList)}>
							<li>If known, use the pronouns a customer provides. If you don't know, avoid gendered pronouns wherever possible.</li>
							<li>
								If it's not possible, use 'they' or 'their' rather than 'his/her' or 'he/she'.
							</li>
						</ul>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>Ask your admin to add you.</CustomCard>
							<CustomCard error={true}>Ask your admin if she can add you.</CustomCard>
						</div>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>Add permissions to their account.</CustomCard>
							<CustomCard error={true}>Add permissions to her account.</CustomCard>
						</div>

						<H3 id="headingsTitles">Headings and titles</H3>
						<ul {...stylex.props(languagePageStyles.bulletList)}>
							<li>
								Use sentence case. Only capitalize the first word of a sentence, proper nouns, and trademarked names (for example: apps, countries, people's names).
							</li>
							<li>
								Don't use bold or italics.
							</li>
							<li>
								Don't use periods.
							</li>
							<li>
								Reconsider using question marks. Preferably rephrase the heading so it's a statement.
							</li>
							<li>
								Phrase UI and documentation headings with an action verb.
							</li>
							<li>
								Avoid gerunds (the 'ing' form of verbs) in UI copy.
							</li>
						</ul>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>Click here for more information</CustomCard>
							<CustomCard error={true}>Want more information by clicking here?</CustomCard>
						</div>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>Add a page to your project</CustomCard>
							<CustomCard error={true}>Adding a page to your project</CustomCard>
						</div>

						<H4 id="articlesHeadings">Articles in headings</H4>
						<ul {...stylex.props(languagePageStyles.bulletList)}>
							<li>Articles (a, an, the) aren't always needed in UI headings.</li>
							<li>
								They're better suited to more conversational sections, like product marketing copy and empty states, as they make these sections more approachable and improve understanding.
							</li>
						</ul>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>Create work item</CustomCard>
							<CustomCard error={true}>Create a work item</CustomCard>
						</div>

						<H3 id="italics">Italics</H3>
						<span>In apps, use italics sparingly as it can be difficult to read. Don't use italics in hyperlinks.</span>
						<span>Italics can be used for:</span>
						<ul {...stylex.props(languagePageStyles.bulletList)}>
							<li>UI elements that might change, like a field name or user input.</li>
							<li>
								For emphasis if the UI doesn't support bold. For example, in a flag or UI message.
							</li>
						</ul>

						<H3 id="lists">Lists</H3>
						<span>Use lists to draw the reader's eye and make items easier to scan and follow. Try to limit lists to 6 items or less. If there are more items, make multiple lists.</span>
						<span>Italics can be used for:</span>
						<ul {...stylex.props(languagePageStyles.bulletList)}>
							<li>UI elements that might change, like a field name or user input.</li>
							<li>
								For emphasis if the UI doesn't support bold. For example, in a flag or UI message.
							</li>
						</ul>

						<H4 id="bulletList">Bulleted list</H4>
						<ul {...stylex.props(languagePageStyles.bulletList)}>
							<li>Use to list options or when the order of the items doesn't matter.</li>
							<li>
								Phrase each item in a parallel way.
							</li>
							<li>
								Don't use commas or periods at the end of each item.
							</li>
						</ul>

						<H5 id="fragmentedSentences">Fragmented Sentences</H5>
						<span>If your list has fragmented sentences, use a lowercase letter for each item and don't use a period at the end of the list. Use a lead-in sentence with a colon before the items.</span>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>
								Due to security concerns, all employees are required to:
								<ul>
									<li>wear an identification tag</li>
									<li>use their security pass to enter or leave an office before 7 a.m. and after 6 p.m.</li>
									<li>alert security if a suspicious package is found</li>
								</ul>
							</CustomCard>
							<CustomCard error={true}>
								Due to security concerns, all employees are required to;
								<ul>
									<li>Wear an identification tag in the building,</li>
									<li>You must use your identification tag to enter an office before 7 a.m. and exit after 6 p.m., and</li>
									<li>If a suspicious package is found, alert security.</li>
								</ul>
							</CustomCard>
						</div>

						<H5 id="completeSentences">Complete Sentences</H5>
						<span>For lists with complete sentences, start an item with a capital letter and end it with a period. Don't use a lead-in sentence with a colon.</span>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>
								Our company has updated security requirements for employees.
								<ul>
									<li>Always wear your identification tag when working in an office.</li>
									<li>Use your identification tag to enter an office before 7 am and when you leave after 6 pm.</li>
								</ul>
							</CustomCard>
							<CustomCard error={true}>
								Our company has updated security requirements for employees:
								<ul>
									<li>always wear your identification tag when working in an office</li>
									<li>use your identification tag to enter an office before 7 am and when you leave after 6 pm.</li>
								</ul>
							</CustomCard>
						</div>

						<H4 id="numberLists">Numbered lists</H4>
						<span>Use numbered lists for tasks or lists where the order of the items matters. Capitalize the first word of each item and end the item with a period.</span>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>
								To add a new user macro:
								<ol>
									<li>Go to <b>Settings</b> then <b>General configuration</b> then <b>User macros</b>.</li>
									<li>Choose <b>Create a user macro.</b></li>
									<li>Enter the macro details</li>
								</ol>
							</CustomCard>
							<CustomCard error={true}>
								To add a new user macro -
								<ol>
									<li>go to <b>Settings</b> then <b>General configuration</b> then <b>User macros</b></li>
									<li>choose <b>Create a user macro</b></li>
									<li>enter the macro details</li>
								</ol>
							</CustomCard>
						</div>

						<H3 id="monospacedText">Monospaced text</H3>
						<span>Use <span style={{fontFamily: 'monospace'}}>monospaced font</span> for names of a file or directory. It's mostly used in attributes, strings, and administrator and developer docs.</span>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>
								To run the program, type <span style={{fontFamily: 'monospace'}}>python app.py</span> in your terminal.
							</CustomCard>
							<CustomCard error={true}>
								To run the program, type <b>python app.py</b> in your terminal.
							</CustomCard>
						</div>

						<H3 id="numbers">Numbers</H3>
						<span>Use digits rather than words in most cases.</span>
						<strong>Exceptions:</strong>
						<ul {...stylex.props(languagePageStyles.bulletList)}>
							<li>If a number starts a sentence, write it out.</li>
							<li>
								In common expressions, write the number out. For example: It's one thing after another.
							</li>
							<li>
								When writing long-form or formal content, write out numbers one to nine.
							</li>
							<li>
								Write out the numbers 'zero' and 'one' if it could be confused for the letters L, I, or O.
							</li>
						</ul>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>Your password should be a minimum of 8 characters.</CustomCard>
							<CustomCard error={true}>Your password should be a minimum of eight characters.</CustomCard>
							</div>
							<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>Exercising is one of the best ways to stay healthy.</CustomCard>
							<CustomCard error={true}>Exercising is 1 of the best ways to stay healthy.</CustomCard>
						</div>

						<H4 id="numbersOutOf">Numbers 'out of'</H4>
						<span>Use digits rather than words in most cases.</span>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>
								<ul>
									<li>4,500</li>
									<li>10,000</li>
									<li>1,250,000</li>
								</ul>
							</CustomCard>
							<CustomCard error={true}>
								<ul>
									<li>4500</li>
									<li>10000</li>
									<li>1250000</li>
								</ul>
							</CustomCard>
						</div>


						<H3 id="spellingWords">Spelling words</H3>
						<span>Use US English in UI copy and code. Check spellings in <a href="https://www.merriam-webster.com/">Merriam-Webster online dictionary.</a></span>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>
								<ul>
									<li>color</li>
									<li>organization</li>
									<li>labeled</li>
								</ul>
							</CustomCard>
							<CustomCard error={true}>
								<ul>
									<li>colour</li>
									<li>organisation</li>
									<li>labelled</li>
								</ul>
							</CustomCard>
						</div>

						<H3 id="truncation">Truncation</H3>
						<span>Ellipses (…) are used to show that text has been cut off — or truncated — when a message doesn't fit in a given space.</span>
						<ul {...stylex.props(languagePageStyles.bulletList)}>
							<li>Avoid truncation whenever possible: shorten UI messages or wrap the text.</li>
							<li>
								Test your designs using multiple screen widths and magnification levels to ensure it doesn't truncate.
							</li>
							<li>
								If truncation can't be avoided, for example in user-generated content or icon buttons, use a tooltip to display the full text for accessibility and usability.
							</li>
							<li>
								In components that truncate, the ellipsis appears without any space next to the last visible character (for example: Work in pro…).
							</li>
						</ul>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>Shorten or wrap messages.</CustomCard>
							<CustomCard error={true}>Don't truncate unless it can't be avoided.</CustomCard>
						</div>

						<H3 id="uielements">UI elements</H3>
						<ul {...stylex.props(languagePageStyles.bulletList)}>
							<li>Use sentence case, even if the UI element doesn't use it.</li>
							<li>
								Use bold to emphasize the UI element in a step.
							</li>
							<li>
								If the UI element has an icon, bold both the name and the icon.
							</li>
							<li>
								Avoid using a &gt; symbol where possible, as it is read out as “greater than” by assistive technologies, leading to confusion. Use 'then' instead.
							</li>
						</ul>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>Go to <b>More</b>, then <b>Link work item.</b></CustomCard>
							<CustomCard error={true}>Go to <b>More</b> &gt; <b>Link Work Item.</b></CustomCard>
						</div>

						<H2 id="grammar">Grammar</H2>

						<H3 id="activeVoice">Active voice</H3>
						<span>Use active voice whenever possible as it improves readability and reflects Control Design's voice and tone.</span>
						<span>Active voice:</span>
						<ul {...stylex.props(languagePageStyles.bulletList)}>
							<li>puts the emphasis on the person or thing doing an action.</li>
							<li>makes content shorter, clearer, friendlier, and more conversational.</li>
						</ul>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>The team completed the report in three days.</CustomCard>
							<CustomCard error={true}>The report was completed by the team in three days.</CustomCard>
						</div>

						<H3 id="pronouns">Pronouns (you, your, we)</H3>
						<ul {...stylex.props(languagePageStyles.bulletList)}>
							<li>Minimize the use of pronouns.</li>
							<li>Most of the time they can be avoided. However, when advising a user, indicating that something in the UI is theirs, or in error messages, you can use 'you' or 'your' or 'we' for a friendlier tone.</li>
						</ul>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>Get access to your work items here.</CustomCard>
							<CustomCard error={true}>Get access to the work items here.</CustomCard>
							</div>
							<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>Your projects</CustomCard>
							<CustomCard error={true}>My projects</CustomCard>
							</div>
							<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>We couldn't load your page</CustomCard>
							<CustomCard error={true}>The page couldn't be loaded</CustomCard>
						</div>

						<H3 id="tense">Tense</H3>
						<span><b>Present tense</b> helps make instructions and messages in the UI clear and engaging.</span>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>We can't load work item DSP-32113.</CustomCard>
							<CustomCard error={true}>We couldn't load work item DSP-32113.</CustomCard>
						</div>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>Validation is required.</CustomCard>
							<CustomCard error={true}>Validation will be required.</CustomCard>
						</div>
						<span><b>Past tense</b> can be used to communicate a completed action, like in error message headings and success flags, or where there could be confusion.</span>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>
								<ul>
									<li>Upload failed</li>
									<li>File created</li>
								</ul>
							</CustomCard>
							<CustomCard error={true}>
								<ul>
									<li>Upload fail</li>
									<li>File Create</li>
								</ul>
							</CustomCard>
						</div>

						<H2 id="punctuation">Punctuation</H2>

						<H3 id="apostrophes">Apostrophes (')</H3>
						<ul {...stylex.props(languagePageStyles.bulletList)}>
							<li>Use an apostrophe to show possession. The apostrophe is placed before the 's' for singular terms and after the 's' for plurals.</li>
							<li>If a word ends in an 's' and is singular, add an 's after the 's'.</li>
							<li>Use a curly apostrophe for better readability and to differentiate from code.
								<ul>
									<li>On a Mac: <b>option + shift + ]</b></li>
									<li>On a Windows: <b>Control + shift + '</b> (or <b>alt + 0146</b>)</li>
								</ul>
							</li>
						</ul>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>
								<ul>
									<li>A week's time</li>
									<li>Three weeks' time</li>
									<li>James's work items</li>
								</ul>
							</CustomCard>
							<CustomCard error={true}>
								<ul>
									<li>A weeks time</li>
									<li>Three week's time</li>
									<li>James' work items</li>
								</ul>
							</CustomCard>
						</div>

						<H3 id="colons">Colons (:)</H3>
						<ul {...stylex.props(languagePageStyles.bulletList)}>
							<li>Use colons to introduce a bulleted list or series of steps.</li>
							<li>Don't use colons at the end of headings.</li>
						</ul>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>
								A password should have:
								<ul>
									<li>12 characters or more</li>
									<li>at least one symbol and one number</li>
									<li>a mix of capital and lowercase letters</li>
								</ul>
							</CustomCard>
							<CustomCard error={true}>
								<b>Turn on two-factor authentication:</b>
								<p>Keep your account safe with an extra layer of security.</p>
							</CustomCard>
						</div>

						<H3 id="commas">Commas  (,)</H3>
						<span>Use an Oxford (or 'serial') comma to offset the final item in a list.</span>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>Cedar, Oak, Willow, and Maple are all types of trees.</CustomCard>
							<CustomCard error={true}>Cedar, Oak, Willow and Maple are all types of trees.</CustomCard>
						</div>

						<H3 id="dashesHyphens">Dashes (—) and hashes (&#x2010;)</H3>
						<H4 id="dashes">Dashes</H4>
						<ul {...stylex.props(languagePageStyles.bulletList)}>
							<li>Use dashes in UI content sparingly. If using, use a spaced em dash.</li>
							<li>In long-form content, use them sparingly to show an abrupt change in a sentence — like this. If the break happens in the middle of a sentence — like this — use spaced em dashes on either side of the phrase.</li>
							<li>If possible, rewrite the sentence or make 2 sentences to avoid a dash. Clear, concise sentences are better for readability and accessibility.</li>
							<li>Don't use a dash or hyphen for ranges of numbers. Use 'to' instead.</li>
							<li>When adding the space, use non-breaking spaces (option + shift + space) to avoid the dash shifting to a new line.</li>
							<li>To make an em dash:</li>
							<ul>
								<li>On a Mac: <b>option + shift + hyphen</b></li>
								<li>On Windows: <b>Control + Alt + -</b> (or <b>ALT + 0151</b>)</li>
							</ul>
						</ul>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>It's important to use hyphens correctly. They should never be overused or used to replace periods.</CustomCard>
							<CustomCard error={true}>It's important to use hyphens correctly — they should never be overused or used to replace periods.</CustomCard>
						</div>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>50 to 100</CustomCard>
							<CustomCard error={true}>50—100</CustomCard>
						</div>

						<H4 id="hyphens">Hyphens</H4>
						<ul {...stylex.props(languagePageStyles.bulletList)}>
							<li>If a noun is described by 2 or more words, use a hyphen to join those words together so they act as a compound adjective (or compound modifier).</li>
							<li><b>Exceptions:</b> don't add a hyphen after the word 'very' or adverbs ending in -ly.</li>
							<li>For specific hyphenated word guidance, check Vocabulary (Center Controls only).</li>
							<li>Use a hyphen when not doing so could cause confusion or ambiguity. Consult the <a href="https://www.merriam-webster.com/">Merriam-Webster online dictionary</a> if you're not sure.</li>
						</ul>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>
								<ul>
									<li>system-wide update</li>
									<li>character-counter logic</li>
									<li>widely communicated update</li>
									<li>very cold drink</li>
									<li>autocorrect</li>
									<li>coworker</li>
									<li>preexisting</li>
								</ul>
							</CustomCard>
							<CustomCard error={true}>
								<ul>
									<li>system wide update</li>
									<li>character counter logic</li>
									<li>widely-communicated update</li>
									<li>very-cold drink</li>
									<li>auto-correct</li>
									<li>co-worker</li>
									<li>pre-existing</li>
								</ul>
							</CustomCard>
						</div>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>
								<ul>
									<li>re-sign the document</li>
									<li>re-create the page</li>
								</ul>
							</CustomCard>
							<CustomCard error={true}>
								<ul>
									<li>resign the document</li>
									<li>recreate the page</li>
								</ul>
							</CustomCard>
						</div>

						<H3 id="ellipses">Ellipses (...)</H3>
						<ul {...stylex.props(languagePageStyles.bulletList)}>
							<li>Don't put spaces in between the periods in an ellipsis.</li>
							<li>Use the symbol for the ellipsis rather than a string of periods:</li>
							<ul>
								<li>On a Mac: <b>Option + ;</b></li>
								<li>On Windows: <b>Control + . (or alt + 0133)</b></li>
							</ul>
						</ul>

						<H4 id="truncationEllips">Truncation</H4>
						<span>Ellipses can be used to show that text has been cut off — or truncated — when a message doesn't fit in a given space.</span>

						<H4 id="quotes">Quotes</H4>
						<ul {...stylex.props(languagePageStyles.bulletList)}>
							<li>When using an ellipsis to omit part of a long quote, include spaces on either side of the ellipsis ( … ).</li>
							<li>For example: “From medicine and space travel to disaster response … our products help teams all over the planet advance humanity through the power of software.” Center Control: Discover our story.</li>
						</ul>

						<H3 id="exclamationMarks">Exclamation marks (!)</H3>
						<ul {...stylex.props(languagePageStyles.bulletList)}>
							<li>Avoid exclamation marks in UI copy and minimize their use in product marketing copy.</li>
							<li>They can be considered for exciting or new things, but ask yourself if it's really that exciting or if one is needed. Don't use more than one exclamation mark per page.</li>
						</ul>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>Project is complete.</CustomCard>
							<CustomCard error={true}>Project is complete!</CustomCard>
						</div>

						<H3 id="periods">Periods (.)</H3>
						<ul {...stylex.props(languagePageStyles.bulletList)}>
							<li>Use a period (full stop) at the end of complete sentences, including in helper text, messages, and notifications.</li>
							<li>Don't use periods in headers, titles, tooltips, field descriptions, and menu names, even if they are full sentences. While long content is discouraged, an exception is if these elements contain more than 1 sentence.</li>
							<li>Only use periods in a bulleted list if the item is a complete sentence. Don't add a period at the end of a list of fragments.</li>
							<li>Add only one space after a period (full stop).</li>
						</ul>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>
								<b>Accessibility principles</b>
								<p>Our principles cover the main requirements to design and build accessible experiences.</p>
							</CustomCard>
							<CustomCard error={true}>
								<b>Accessibility principles.</b>
								<p>Our principles cover the main requirements to design and build accessible experiences.</p>
							</CustomCard>
						</div>
						<span>If a link ends a sentence, include a period but don't hyperlink it.</span>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>To find something on the internet, all you need is a <a href="http://google.com/">search engine</a>.</CustomCard>
							<CustomCard error={true}>To find something on the internet, all you need is a <a href="http://google.com/">search engine.</a></CustomCard>
						</div>

						<H3 id="quotations">Quotation marks ('' | "")</H3>
						<span>In the UI, use:</span>
						<ul {...stylex.props(languagePageStyles.bulletList)}>
							<li>single curly quotes, unless you're writing in code or there's a semantic reason to use straight quotes.</li>
						</ul>
						<span>In body copy and long-form content, such as documentation and marketing, use:</span>
						<ul {...stylex.props(languagePageStyles.bulletList)}>
							<li>double quotes ("") for speech and direct quotes. Don't use italics.</li>
							<li>single quotes ('') to draw attention to a word you're defining.</li>
						</ul>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>“We have big things planned for the coming year,” said Mike.</CustomCard>
							<CustomCard error={true}>‘We have big things planned for the coming year,’ said Mike.</CustomCard>
						</div>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>They tried to avoid talking about the ‘big’ secret.</CustomCard>
							<CustomCard error={true}>They tried to avoid talking about the “big” secret.</CustomCard>
						</div>
						<H4 id="emphasis">Emphasis</H4>
						<span>Don’t use quotation marks to emphasize UI elements, page titles, and other objects. Instead use <b>bold</b>.</span>
						<div {...stylex.props(languagePageStyles.tiles)}>
							<CustomCard error={false}>Go to <b>Settings</b></CustomCard>
							<CustomCard error={true}>Go to ‘Settings’.</CustomCard>
						</div>

					</div>
				</div>
			</div>
		</div>
	);
}