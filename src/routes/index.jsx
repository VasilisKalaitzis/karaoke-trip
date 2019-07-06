import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import KaraokeFrame from "../components/KaraokeFrame/index"

// assign our route paths
const Routes = () => (
    <main>
        <Switch>
            <Route path="/songLyrics" component={KaraokeFrame} />
            <Route path="/songLyrics/:songArtist/:songTitle" component={KaraokeFrame} />
        </Switch>
    </main>
);

export default Routes;
