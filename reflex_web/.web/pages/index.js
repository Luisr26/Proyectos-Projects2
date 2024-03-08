/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { Button as RadixThemesButton, Code as RadixThemesCode, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Text as RadixThemesText, ThemePanel as RadixThemesThemePanel } from "@radix-ui/themes"
import env from "/env.json"
import NextHead from "next/head"



export function Fragment_966c0378eb9d65bdfb5286644be9b831 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const state = useContext(StateContexts.state)


  return (
    <Fragment>
  {isTrue(((!state.is_hydrated) || (connectErrors.length > 0))) ? (
  <Fragment>
  <LucideWifiOffIcon css={{"color": "crimson", "zIndex": 9999, "position": "fixed", "bottom": "30px", "right": "30px", "animation": `${pulse} 1s infinite`}} size={32}>
  {`wifi_off`}
</LucideWifiOffIcon>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Fragment_ac0b06893fc1b15016f3e0532508036d () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(connectErrors.length >= 2) ? (
  <Fragment>
  <RadixThemesDialog.Root css={{"zIndex": 9999}} open={connectErrors.length >= 2}>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title>
  {`Connection Error`}
</RadixThemesDialog.Title>
  <RadixThemesText as={`p`}>
  {`Cannot connect to server: `}
  {(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}
  {`. Check if server is reachable at `}
  {getBackendURL(env.EVENT).href}
</RadixThemesText>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Button_80c40ecf89ec50feeaadcf7327218365 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_e1770e4c288a02815b2bfe5b42fe63c0 = useCallback((_e) => addEvents([Event("_redirect", {path:`https://reflex.dev/docs/getting-started/introduction/`,external:false})], (_e), {}), [addEvents, Event])

  return (
    <RadixThemesButton onClick={on_click_e1770e4c288a02815b2bfe5b42fe63c0} size={`4`}>
  {`Check out our docs!`}
</RadixThemesButton>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment>
  <div css={{"position": "fixed", "width": "100vw", "height": "0"}}>
  <Fragment_966c0378eb9d65bdfb5286644be9b831/>
</div>
  <Fragment_ac0b06893fc1b15016f3e0532508036d/>
</Fragment>
  <RadixThemesFlex css={{"height": "100vh", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesThemePanel/>
  <RadixThemesFlex align={`center`} css={{"fontSize": "2em"}} direction={`column`} gap={`7`}>
  <RadixThemesHeading size={`9`}>
  {`Hola Reflex!`}
</RadixThemesHeading>
  <RadixThemesText as={`p`}>
  {`Get started by editing `}
  <RadixThemesCode>
  {`reflex_web/reflex_web.py`}
</RadixThemesCode>
</RadixThemesText>
  <Button_80c40ecf89ec50feeaadcf7327218365/>
</RadixThemesFlex>
</RadixThemesFlex>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
