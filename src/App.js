import {Page} from "./common/Page/Page";
import './index.scss';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {IdeaTable} from "./components/IdeaTable/IdeaTable";
import {MailPage} from "./components/MailPage/MailPage";
import {withData} from "./components/withData/withData";
import {getMails} from "./api/mailAPI";


function App() {


    const MailPageWithData = withData(MailPage, getMails);
    const IdeaPageWithData = withData(MailPage, getMails);

    return (
        <Router>
            <Switch>
                <Route path="/ideas">
                    <Page title='Идеи'>
                        <IdeaTable items={[]}/>
                    </Page>
                </Route>
                <Route path="/">
                    <MailPageWithData />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
