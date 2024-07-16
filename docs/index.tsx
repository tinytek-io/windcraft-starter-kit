import { AreaChart } from "@/ui/charts/AreaChart";
import { BarChart } from "@/ui/charts/BarChart";
import { LinePlot } from "@/ui/charts/LinePlot";
import { PieChart } from "@/ui/charts/PieChart";
import { RadarChart } from "@/ui/charts/RadarChart";
import { Accordion, Item } from "@/ui/components/Accordion";
import { AlertDialog } from "@/ui/components/AlertDialog";
import { Avatar } from "@/ui/components/Avatar";
import { Badge } from "@/ui/components/Badge";
import { Breadcrumb, Breadcrumbs } from "@/ui/components/Breadcrumbs";
import { Button } from "@/ui/components/Button";
import { Calendar } from "@/ui/components/Calendar";
import { Checkbox, CheckboxGroup } from "@/ui/components/Checkbox";
import { ComboBox, ComboBoxItem } from "@/ui/components/ComboBox";
import { DateField } from "@/ui/components/DateField";
import { DatePicker } from "@/ui/components/DatePicker";
import { DateRangePicker } from "@/ui/components/DateRangePicker";
import { Dialog } from "@/ui/components/Dialog";
import { DropZone } from "@/ui/components/DropZone";
import { Form } from "@/ui/components/Form";
import { GridList, GridListItem } from "@/ui/components/GridList";
import { Group } from "@/ui/components/Group";
import { Content, Heading, IllustratedMessage } from "@/ui/components/IllustratedMessage";
import { InlineAlert } from "@/ui/components/InlineAlert";
import { Input } from "@/ui/components/Input";
import { Label } from "@/ui/components/Label";
import { Link } from "@/ui/components/Link";
import { ListBox, ListBoxItem } from "@/ui/components/ListBox";
import { Menu, MenuItem, MenuSeparator } from "@/ui/components/Menu";
import { Meter } from "@/ui/components/Meter";
import { Modal } from "@/ui/components/Modal";
import { NumberField } from "@/ui/components/NumberField";
import { Popover } from "@/ui/components/Popover";
import { ProgressBar } from "@/ui/components/ProgressBar";
import { Radio, RadioGroup } from "@/ui/components/RadioGroup";
import { RangeCalendar } from "@/ui/components/RangeCalendar";
import { SearchField } from "@/ui/components/SearchField";
import { Select, SelectItem } from "@/ui/components/Select";
import { Separator } from "@/ui/components/Separator";
import { Slider } from "@/ui/components/Slider";
import { StatusLight } from "@/ui/components/StatusLight";
import { Switch } from "@/ui/components/Switch";
import { Cell, Column, Row, Table, TableHeader } from "@/ui/components/Table";
import { Tab, TabList, TabPanel, Tabs } from "@/ui/components/Tabs";
import { Tag, TagGroup } from "@/ui/components/TagGroup";
import { TextField } from "@/ui/components/TextField";
import { TimeField } from "@/ui/components/TimeField";
import { ToastAction, toastQueue } from "@/ui/components/Toast";
import { ToggleButton } from "@/ui/components/ToggleButton";
import { Toolbar, ToolbarGroup } from "@/ui/components/Toolbar";
import { Tooltip } from "@/ui/components/Tooltip";
import { parseDate } from "@internationalized/date";
import NoSearchResults from "@spectrum-icons/illustrations/NoSearchResults";
import { BoldIcon, HelpCircleIcon, ItalicIcon, MoreHorizontalIcon, Pencil, UnderlineIcon } from "lucide-react";
import type { ReactNode } from "react";
import { DialogTrigger, FileTrigger, MenuTrigger, TableBody, Text, TooltipTrigger } from "react-aria-components";
import { chartDataMedium, radarDataMedium } from "./charts/_lib/data";

export const frontmatter = {
  pageType: "custom"
};

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-y-16 px-16 py-32">
      <div className="flex flex-col items-center gap-16 text-center lg:flex-row">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="text-nowrap rounded-full border p-1 px-2 py-1 text-center font-semibold text-primary text-sm">
            Copy &amp; Own
          </div>
          <h1 className="font-semibold text-7xl text-foreground">WindCraft Starter Kit</h1>
          <h2 className="px-8 font-semibold text-4xl text-muted-foreground">React Template Components</h2>
          <div className="text-lg">
            React Aria components + Tailwind CSS &amp; Variants + Inspiration by Shadcn UI + Recharts &amp; Viridis + ❤️
          </div>
          <div className="flex gap-4">
            <a
              className="rounded-md bg-primary px-4 py-2 font-semibold text-base text-primary-foreground"
              href="/guide/"
            >
              Quick Start
            </a>
            <a
              className="rounded-md bg-secondary px-4 py-2 font-semibold text-base text-secondary-foreground"
              href="https://github.com/tinytek-io/windcraft-ui"
            >
              Github
            </a>
          </div>
        </div>
        <div className="max-w-xl">
          <img src="/windcraft-logo.webp" alt="WindCraft Logo" />
        </div>
      </div>

      <section className="flex w-full max-w-7xl flex-col gap-8">
        <h2 className="font-semibold text-4xl">Features</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-2 rounded-md border-2 border-border p-4">
            <div className="font-semibold text-xl">Crafted for Startups</div>
            <div>
              Boost your “Time to first feature” with our React template components and focus on building your product.
            </div>
          </div>
          <div className="flex flex-col gap-2 rounded-md border-2 border-border p-4">
            <div className="font-semibold text-xl">Best in class accessibility</div>
            <div>
              We build using the best in class React Aria Components, ensuring that our components are accessible to all
              users.
            </div>
          </div>
          <div className="flex flex-col gap-2 rounded-md border-2 border-border p-4">
            <div className="font-semibold text-xl">Copy and own</div>
            <div>
              Components should be part of your code base, not a dependency. Copy and own our components to make them
              your own.
            </div>
          </div>
          <div className="flex flex-col gap-2 rounded-md border-2 border-border p-4">
            <div className="font-semibold text-xl">Customizable theme</div>
            <div>Make your components look like your brand. Customize the theme to match your brand colors.</div>
          </div>
          <div className="flex flex-col gap-2 rounded-md border-2 border-border p-4">
            <div className="font-semibold text-xl">Dark mode</div>
            <div>We support dark mode out of the box. Just toggle the theme to switch between light and dark mode.</div>
          </div>
          <div className="flex flex-col gap-2 rounded-md border-2 border-border p-4">
            <div className="font-semibold text-xl">Figma design (coming soon)</div>
            <div>We maintain a Figma design file that you can use to design your components.</div>
          </div>
        </div>
      </section>

      <section className="flex w-full max-w-7xl flex-col gap-8">
        <h2 className="font-semibold text-4xl">Components</h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          <ComponentExample name="Button" href="/components/buttons/button.html">
            <Button>Button</Button>
          </ComponentExample>
          <ComponentExample name="FileTrigger" href="/components/buttons/file-trigger.html">
            <FileTrigger>
              <Button>Select a file</Button>
            </FileTrigger>
          </ComponentExample>
          <ComponentExample name="ToggleButton" href="/components/buttons/toggle-button.html">
            <ToggleButton aria-label="Toggle italic">
              <BoldIcon className="h-4 w-4" />
            </ToggleButton>
          </ComponentExample>

          <ComponentExample name="GridList" href="/components/collections/grid-list.html">
            <GridList aria-label="Favorite pokemon" selectionMode="multiple">
              <GridListItem textValue="Charizard">Charizard</GridListItem>
              <GridListItem textValue="Blastoise">Blastoise</GridListItem>
              <GridListItem textValue="Venusaur">Venusaur</GridListItem>
              <GridListItem textValue="Pikachu" isDisabled>
                Pikachu
              </GridListItem>
            </GridList>
          </ComponentExample>
          <ComponentExample name="ListBoxItem" href="/components/collections/list-box.html">
            <ListBox aria-label="Favorite animal" selectionMode="multiple">
              <ListBoxItem>Aardvark</ListBoxItem>
              <ListBoxItem>Cat</ListBoxItem>
              <ListBoxItem>Dog</ListBoxItem>
              <ListBoxItem>Kangaroo</ListBoxItem>
              <ListBoxItem>Panda</ListBoxItem>
              <ListBoxItem>Snake</ListBoxItem>
            </ListBox>
          </ComponentExample>
          <ComponentExample name="Menu" href="/components/collections/menu.html">
            <MenuTrigger aria-label="Favorite animal">
              <Button className="px-2" variant="secondary">
                <MoreHorizontalIcon className="h-5 w-5" />
              </Button>
              <Menu>
                <MenuItem id="new">New…</MenuItem>
                <MenuItem id="open">Open…</MenuItem>
                <MenuSeparator />
                <MenuItem id="save" isDisabled>
                  Save
                </MenuItem>
                <MenuItem id="saveAs">Save as…</MenuItem>
                <MenuSeparator />
                <MenuItem id="print">Print…</MenuItem>
              </Menu>
            </MenuTrigger>
          </ComponentExample>
          <ComponentExample name="Table" href="/components/collections/table.html">
            <Table aria-label="Files" selectionMode="none">
              <TableHeader>
                <Column isRowHeader>Name</Column>
                <Column>Type</Column>
                <Column>Date Modified</Column>
              </TableHeader>
              <TableBody>
                <Row>
                  <Cell>Games</Cell>
                  <Cell>File folder</Cell>
                  <Cell>6/7/2020</Cell>
                </Row>
                <Row>
                  <Cell>Program Files</Cell>
                  <Cell>File folder</Cell>
                  <Cell>4/7/2021</Cell>
                </Row>
                <Row>
                  <Cell>bootmgr</Cell>
                  <Cell>System file</Cell>
                  <Cell>11/20/2010</Cell>
                </Row>
                <Row>
                  <Cell>log.txt</Cell>
                  <Cell>Text Document</Cell>
                  <Cell>1/18/2016</Cell>
                </Row>
              </TableBody>
            </Table>
          </ComponentExample>
          <ComponentExample name="TagGroup" href="/components/collections/tag-group.html">
            <TagGroup label="Ice cream flavor" selectionMode="multiple">
              <Tag>Chocolate</Tag>
              <Tag>Mint</Tag>
              <Tag>Strawberry</Tag>
              <Tag>Vanilla</Tag>
            </TagGroup>
          </ComponentExample>

          <ComponentExample name="Avatar" href="/components/content/avatar.html">
            <Avatar initials="ab" isRound />
          </ComponentExample>
          <ComponentExample name="Group" href="/components/content/group.html">
            <TextField>
              <Label>Email</Label>
              <Group>
                <Input isEmbedded />
                <Button size="sm" variant="ghost" aria-label="Add email">
                  +
                </Button>
              </Group>
            </TextField>
          </ComponentExample>
          <ComponentExample name="IllustratedMessage" href="/components/content/illustrated-message.html">
            <IllustratedMessage>
              <NoSearchResults />
              <Heading>No matching results</Heading>
              <Content>Try another search.</Content>
            </IllustratedMessage>
          </ComponentExample>
          <ComponentExample name="Toolbar" href="/components/content/toolbar.html">
            <Toolbar aria-label="Text formatting">
              <ToolbarGroup aria-label="Style" className="contents">
                <ToggleButton aria-label="Bold" className="p-2.5">
                  <BoldIcon className="h-4 w-4" />
                </ToggleButton>
                <ToggleButton aria-label="Italic" className="p-2.5">
                  <ItalicIcon className="h-4 w-4" />
                </ToggleButton>
                <ToggleButton aria-label="Underline" className="p-2.5">
                  <UnderlineIcon className="h-4 w-4" />
                </ToggleButton>
              </ToolbarGroup>
              <Separator orientation="vertical" />
              <ToolbarGroup aria-label="Clipboard" className="contents">
                <Button variant="secondary">Copy</Button>
                <Button variant="secondary">Paste</Button>
                <Button variant="secondary">Cut</Button>
              </ToolbarGroup>
              <Separator orientation="vertical" />
              <Checkbox>Night Mode</Checkbox>
            </Toolbar>
          </ComponentExample>

          <ComponentExample name="Calendar" href="/components/date-time/calendar.html">
            <Calendar aria-label="Event date" className="rounded-lg border border-border p-2" />
          </ComponentExample>
          <ComponentExample name="DateField" href="/components/date-time/date-field.html">
            <DateField aria-label="Select date" />
          </ComponentExample>
          <ComponentExample name="DatePicker" href="/components/date-time/date-picker.html">
            <DatePicker aria-label="Select time" label="Date" />
          </ComponentExample>
          <ComponentExample name="DateRangePicker" href="/components/date-time/date-range-picker.html">
            <DateRangePicker aria-label="Select date" label="Date" />
          </ComponentExample>
          <ComponentExample name="RangeCalendar" href="/components/date-time/range-calendar.html">
            <RangeCalendar
              aria-label="Select time range"
              className="w-fit rounded-lg border border-border p-2"
              defaultValue={{
                start: parseDate("2020-02-03"),
                end: parseDate("2020-02-12")
              }}
            />
          </ComponentExample>
          <ComponentExample name="TimeField" href="/components/date-time/time-field.html">
            <TimeField aria-label="Select time" />
          </ComponentExample>

          <ComponentExample name="DropZone" href="/components/drop-zone/drop-zone.html">
            <DropZone>
              <Text slot="label">"Drop files here"</Text>
            </DropZone>
          </ComponentExample>

          <ComponentExample name="CheckboxGroup" href="/components/forms/checkbox-group.html">
            <CheckboxGroup>
              <Label>Favorite sports</Label>
              <Checkbox value="soccer">Soccer</Checkbox>
              <Checkbox value="baseball">Baseball</Checkbox>
              <Checkbox value="basketball">Basketball</Checkbox>
            </CheckboxGroup>
          </ComponentExample>
          <ComponentExample name="Checkbox" href="/components/forms/checkbox.html">
            <Checkbox>Checkbox</Checkbox>
          </ComponentExample>
          <ComponentExample name="Form" href="/components/forms/form.html">
            <Form>
              <TextField isRequired label="Email" name="email" type="email" />
              <DateField isRequired label="Birth date" />
              <div className="flex gap-2">
                <Button type="submit">Submit</Button>
                <Button type="reset" variant="secondary">
                  Reset
                </Button>
              </div>
            </Form>
          </ComponentExample>
          <ComponentExample name="Input" href="/components/forms/input.html">
            <TextField className="grid gap-1.5">
              <Label>First name</Label>
              <Input type="text" placeholder="Enter first name" autoComplete="username" />
            </TextField>
          </ComponentExample>
          <ComponentExample name="Label" href="/components/forms/label.html">
            <Label>First name</Label>
          </ComponentExample>
          <ComponentExample name="NumberField" href="/components/forms/number-field.html">
            <NumberField label="Cookies" description="Enter a number between 0 and 100" />
          </ComponentExample>
          <ComponentExample name="RadioGroup" href="/components/forms/radio-group.html">
            <RadioGroup label="Favorite sport" description="Select your favorite sport">
              <Radio value="soccer">Soccer</Radio>
              <Radio value="baseball">Baseball</Radio>
              <Radio value="basketball">Basketball</Radio>
            </RadioGroup>
          </ComponentExample>
          <ComponentExample name="SearchField" href="/components/forms/search-field.html">
            <SearchField label="Search" description="Enter a search term to find content" />
          </ComponentExample>
          <ComponentExample name="Slider" href="/components/forms/slider.html">
            <Slider defaultValue={[30]} label="Range" thumbLabels={["value"]} />
          </ComponentExample>
          <ComponentExample name="Switch" href="/components/forms/switch.html">
            <Switch>Low power mode</Switch>
          </ComponentExample>
          <ComponentExample name="TextField" href="/components/forms/text-field.html">
            <TextField
              label="First name"
              placeholder="Enter first name"
              autocomplete="username"
              errorMessage="First name is required"
              description="Enter your first name"
            />
          </ComponentExample>

          <ComponentExample name="Accordion" href="/components/navigation/accordion.html">
            <Accordion className="w-full max-w-xl" disabledKeys={["last"]}>
              <Item key="files" title="Your files">
                Files
              </Item>
              <Item key="shared" title="Shared with you">
                Shared
              </Item>
              <Item key="last" title="Last Item">
                Last
              </Item>
            </Accordion>
          </ComponentExample>
          <ComponentExample name="Breadcrumbs" href="/components/navigation/breadcrumbs.html">
            <Breadcrumbs>
              <Breadcrumb href="/">Home</Breadcrumb>
              <Breadcrumb href="/react-aria">React Aria</Breadcrumb>
              <Breadcrumb>Breadcrumbs</Breadcrumb>
            </Breadcrumbs>
          </ComponentExample>
          <ComponentExample name="Link" href="/components/navigation/link.html">
            <Link href="/">Link</Link>
          </ComponentExample>
          <ComponentExample name="Tabs" href="/components/navigation/tabs.html">
            <Tabs>
              <TabList aria-label="History of Ancient Rome">
                <Tab id="FoR">Founding of Rome</Tab>
                <Tab id="MaR">Monarchy and Republic</Tab>
                <Tab id="Emp">Empire</Tab>
              </TabList>
              <TabPanel id="FoR">Arma virumque cano, Troiae qui primus ab oris.</TabPanel>
              <TabPanel id="MaR">Senatus Populusque Romanus.</TabPanel>
              <TabPanel id="Emp">Alea jacta est.</TabPanel>
            </Tabs>
          </ComponentExample>

          <ComponentExample name="AlertDialog" href="/components/overlays/alert-dialog.html">
            <DialogTrigger>
              <Button variant="secondary">Delete…</Button>
              <Modal>
                <AlertDialog
                  actionLabel="Delete"
                  onAction={() => alert("Deleted!")}
                  role="dialog"
                  title="Delete folder"
                  variant="destructive"
                >
                  Are you sure you want to delete "Documents"? All contents will be permanently destroyed.
                </AlertDialog>
              </Modal>
            </DialogTrigger>
          </ComponentExample>
          <ComponentExample name="Dialog" href="/components/overlays/dialog.html">
            <DialogTrigger>
              <Button>Sign up…</Button>
              <Modal>
                <Dialog>
                  {({ close }) => (
                    <Form>
                      <Heading slot="title">Sign up</Heading>
                      <TextField label="First Name" autoFocus />
                      <TextField label="Last Name" />
                      <Button onPress={close}>Submit</Button>
                    </Form>
                  )}
                </Dialog>
              </Modal>
            </DialogTrigger>
          </ComponentExample>
          <ComponentExample name="Modal" href="/components/overlays/modal.html">
            <DialogTrigger>
              <Button>Sign up…</Button>
              <Modal>
                <Dialog>
                  {({ close }) => (
                    <Form>
                      <Heading slot="title">Sign up</Heading>
                      <TextField label="First Name" autoFocus />
                      <TextField label="Last Name" />
                      <Button onPress={close}>Submit</Button>
                    </Form>
                  )}
                </Dialog>
              </Modal>
            </DialogTrigger>
          </ComponentExample>
          <ComponentExample name="Popover" href="/components/overlays/popover.html">
            <DialogTrigger>
              <Button aria-label="Help" variant="icon">
                <HelpCircleIcon className="h-4 w-4" />
              </Button>
              <Popover className="max-w-[250px]" showArrow>
                <Dialog>
                  <span className="mb-2 font-semibold text-lg" slot="title">
                    Help
                  </span>
                  <p className="text-sm">For help accessing your account, please contact support.</p>
                </Dialog>
              </Popover>
            </DialogTrigger>
          </ComponentExample>
          <ComponentExample name="Tooltip" href="/components/overlays/tooltip.html">
            <TooltipTrigger>
              <Button variant="outline" size="icon" aria-label="Edit">
                <Pencil className="h-4 w-4" />
              </Button>
              <Tooltip>Edit</Tooltip>
            </TooltipTrigger>
          </ComponentExample>

          <ComponentExample name="ComboBox" href="/components/pickers/combo-box.html">
            <ComboBox label="Ice cream flavor" placeholder="Select a flavor" description="Select your favorite flavor">
              <ComboBoxItem>Chocolate</ComboBoxItem>
              <ComboBoxItem id="mint">Mint</ComboBoxItem>
              <ComboBoxItem isDisabled>Strawberry</ComboBoxItem>
              <ComboBoxItem>Vanilla</ComboBoxItem>
            </ComboBox>
          </ComponentExample>
          <ComponentExample name="Select" href="/components/pickers/select.html">
            <Select label="Ice cream flavor" description="Select your favorite flavor">
              <SelectItem>Chocolate</SelectItem>
              <SelectItem id="mint">Mint</SelectItem>
              <SelectItem>Strawberry</SelectItem>
              <SelectItem>Vanilla</SelectItem>
            </Select>
          </ComponentExample>

          <ComponentExample name="Badge" href="/components/status/badge.html">
            <Badge variant="success">Licensed</Badge>
          </ComponentExample>
          <ComponentExample name="InlineAlert" href="/components/status/inline-alert.html">
            <InlineAlert>
              <Heading>Payment Information</Heading>
              <Content>
                Enter your billing address, shipping address, and payment method to complete your purchase.
              </Content>
            </InlineAlert>
          </ComponentExample>
          <ComponentExample name="Meter" href="/components/status/meter.html">
            <Meter label="Storage space" value={80} />
          </ComponentExample>
          <ComponentExample name="ProgressBar" href="/components/status/progress-bar.html">
            <ProgressBar label="Loading…" value={80} />
          </ComponentExample>
          <ComponentExample name="StatusLight" href="/components/status/status-light.html">
            <StatusLight variant="success">Ready</StatusLight>
          </ComponentExample>
          <ComponentExample name="Toast" href="/components/status/toast.html">
            <Button
              variant="outline"
              onPress={() => {
                toastQueue.add(
                  {
                    title: "Scheduled: Catch up ",
                    description: "Friday, February 10, 2023 at 5:57 PM",
                    action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                  },
                  {
                    timeout: 10000
                  }
                );
              }}
            >
              Add to calendar
            </Button>
          </ComponentExample>
          <ComponentExample name="AreaChart" href="/charts/basic/area-chart.html" responsive>
            <AreaChart data={chartDataMedium} isAnimationActive={false} />
          </ComponentExample>
          <ComponentExample name="BarChart" href="/charts/basic/bar-chart.html" responsive>
            <BarChart data={chartDataMedium} isAnimationActive={false} />
          </ComponentExample>
          <ComponentExample name="LinePlot" href="/charts/basic/line-plot.html" responsive>
            <LinePlot data={chartDataMedium} isAnimationActive={false} />
          </ComponentExample>
          <ComponentExample name="PieChart" href="/charts/basic/pie-chart.html" responsive>
            <PieChart data={chartDataMedium} isAnimationActive={false} />
          </ComponentExample>
          <ComponentExample name="RadarChart" href="/charts/basic/radar-chart.html" responsive>
            <RadarChart data={radarDataMedium} domain={[0, 150]} isAnimationActive={false} />
          </ComponentExample>
        </div>
      </section>
    </div>
  );
}

type ComponentExampleProps = {
  href: string;
  name: string;
  responsive?: boolean;
  children: ReactNode;
};

function ComponentExample({ href, name, responsive, children }: Readonly<ComponentExampleProps>) {
  const style = responsive
    ? {
        zoom: "50%",
        width: 300,
        height: 300
      }
    : {
        zoom: "50%"
      };
  return (
    <a
      href={href}
      className="relative flex aspect-square max-w-80 cursor-pointer items-center justify-center overflow-hidden rounded-md border-2 border-border p-2"
      aria-label={`Navigate to ${name}`}
      title={`Navigate to ${name}`}
    >
      <div style={style}>{children}</div>
      <div className="absolute right-0 bottom-0 left-0 bg-background/20 text-center backdrop-blur-2xl">{name}</div>
    </a>
  );
}
