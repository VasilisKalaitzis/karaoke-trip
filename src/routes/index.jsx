import React from "react";
import { Switch, Route } from "react-router-dom";

// assign our route paths
const Routes = () => (
    <main>
        <Switch>
            {/* <Route exact path="/invoices" component={Invoices} />
            <Route exact path="/invoice/:invoiceId" component={Invoice} />
            <Route path="/invoice" component={Invoice} /> */}
        </Switch>
    </main>
);

export default Routes;
