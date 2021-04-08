
import './index.scss';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {MailPage} from "./components/MailPage/MailPage";
import {IdeaPage} from "./components/IdeaPage/IdeaPage";
import {withData} from "./components/withData/withData";
import {getMails, createMail} from "./api/mailAPI";
import {getIdeas, createIdea} from "./api/ideaAPI";


function App() {

    const MailPageWithData = withData(MailPage, getMails, createMail);
    const IdeaPageWithData = withData(IdeaPage, getIdeas, createIdea);

    return (
        <Router>
            <Switch>
                <Route path="/ideas">
                    <IdeaPageWithData />
                </Route>
                <Route path="/">
                    <MailPageWithData />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
