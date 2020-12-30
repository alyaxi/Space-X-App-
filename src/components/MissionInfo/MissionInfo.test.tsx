      
import React from "react"
import {shallow} from "enzyme"
import Loader from '../Mission/Loader/Loader';
import {MissionInfo} from "../MissionInfo/MissionInfo"

describe("It should render the MissionList component" , () => {
    const container = shallow(<Loader/>)


    it("should render the loading component" , () => {
        expect(container.containsMatchingElement(<Loader/>)).toEqual(false)
    })


})

