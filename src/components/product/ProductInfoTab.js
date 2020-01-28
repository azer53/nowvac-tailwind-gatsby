import React from "react"
import Tabs from "../tabs/Tabs"
import TabList from "../tabs/TabList"
import TabPanel from "../tabs/TabPanel"
import TabListItem from "../tabs/TabListItem"

const ProductInfoTab = ({ product }) => {
  return (
    <Tabs className="w-3/5 pr-2 pt-8">
      <TabList className="flex flex-row mb-8">
        <TabListItem className="pr-8 py-2" activeClass="font-bold">
          <span>Product Description</span>
        </TabListItem>
        <TabListItem className="pr-8 py-2" activeClass="font-bold">
          <span>Delivery</span>
        </TabListItem>
        <TabListItem className="pr-8 py-2" activeClass="font-bold">
          <span>Documents</span>
        </TabListItem>
      </TabList>

      <TabPanel className="m-4 ml-0">
        <p>{product.description}</p>
      </TabPanel>

      <TabPanel className="m-4 ml-0">
        <p>
          <b>Luigi</b> (<i>Japanese: ルイージ Hepburn: Ruīji, [ɾɯ.iː.dʑi̥]</i>) (
          <i>English: /luˈiːdʒi/; Italian: [luˈiːdʒi]</i>) is a fictional
          character featured in video games and related media released by
          Nintendo. Created by prominent game designer Shigeru Miyamoto, Luigi
          is portrayed as the slightly younger but taller fraternal twin brother
          of Nintendo's mascot Mario, and appears in many games throughout the
          Mario franchise, often as a sidekick to his brother.
        </p>
      </TabPanel>

      <TabPanel className="m-4 ml-0">
        <p>
          <b>Toad</b> (<i>Japanese: キノピオ Hepburn: Kinopio</i>) is a
          fictional character who primarily appears in Nintendo's Mario
          franchise. Created by Japanese video game designer Shigeru Miyamoto,
          he is portrayed as a citizen of the Mushroom Kingdom and is one of
          Princess Peach's most loyal attendants; constantly working on her
          behalf. He is usually seen as a non-player character (NPC) who
          provides assistance to Mario and his friends in most games, but there
          are times when Toad(s) takes center stage and appears as a
          protagonist, as seen in Super Mario Bros. 2, Wario's Woods, Super
          Mario 3D World, and Captain Toad: Treasure Tracker.
        </p>
      </TabPanel>
    </Tabs>
  )
}

export default ProductInfoTab
