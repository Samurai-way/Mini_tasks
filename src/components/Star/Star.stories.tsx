import React, {useState} from 'react';
import {Father} from "./Star";

export default {
    title: 'Star',
    component: Father,
}

export const Star0 = () => <Father value={0} setValue={()=>{}}/>
export const Star1 = () => <Father value={1} setValue={()=>{}}/>
export const Star2 = () => <Father value={2} setValue={()=>{}}/>
export const Star3 = () => <Father value={3} setValue={()=>{}}/>
export const Star4 = () => <Father value={4} setValue={()=>{}}/>