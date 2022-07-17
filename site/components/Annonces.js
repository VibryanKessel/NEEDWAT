import React from 'react';
import {ScrollView,FlatList, Image, Text, View} from 'react-native';
import { Annonce, AnnonceGroup } from './Annonce';
import ListeAnnonces from '../data/ListeAnnonces';
import tw from 'twrnc';
    
export default function Annonces() {
    return <ScrollView>
            {/* <View style = {tw.style(`p-10 shadow-indigo-500/40 shadow-lg`)}>
              <Text 
                style = {tw.style(` font-bold text-xl text-center text-indigo-600`)}>
                LISTE  DES  ANNONCES
              </Text>
            </View>     */}
            <AnnonceGroup>
              {ListeAnnonces.map((annonce,key) => {
                return <Annonce info={annonce} key = {annonce.id}></Annonce>
              }
              )}
          </AnnonceGroup>
        </ScrollView>
            }