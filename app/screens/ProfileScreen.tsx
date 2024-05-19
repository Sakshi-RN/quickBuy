import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import ProfileMenuCard from "../components/account/ProfileMenuCard";
import AccountUpdateModal from "../components/account/update-modals/AccountUpdateNameModal";
import AccountUpdateEmailModal from "../components/account/update-modals/AccountUpdateEmailModal";
import AccountUpdateAlternateModal from "../components/account/update-modals/AccountUpdateAlternateModal";
import AccountGenderModal from "../components/account/update-modals/AccountGenderModal";
import AccountFamilyCOunModal from "../components/account/update-modals/AccountFamilyCOunModal";
import AccountWeightModal from "../components/account/update-modals/AccountWeightModal";

const ProfileScreen = () => {
    const [toggleModal, setToggleModal] = useState("");
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#f0f0f4",
                paddingVertical: 16,
                paddingHorizontal: 16,
            }}
        >
            <ProfileMenuCard
                name={"Name"}
                value={"Sakshi Sahu"}
                onClick={() => {
                    setToggleModal("name");
                }}
            />
            <ProfileMenuCard
                name={"Email"}
                value={"Not Added"}
                onClick={() => {
                    setToggleModal("email");
                }}
            />
            <ProfileMenuCard
                name={"Alternate Number"}
                value={"Not Added"}
                onClick={() => {
                    setToggleModal("alternate");
                }}
            />
            <ProfileMenuCard
                name={"Gender"}
                value={"Not Added"}
                onClick={() => {
                    setToggleModal("gender");
                }}
            />
            <ProfileMenuCard
                name={"Family Member Count"}
                value={"Not Added"}
                onClick={() => {
                    setToggleModal("familyCount");
                }}
            />
            <ProfileMenuCard
                name={"Weight(kg)"}
                value={"Not Added"}
                onClick={() => {
                    setToggleModal("weight");
                }}
            />
            {toggleModal === "name" && (
                <AccountUpdateModal
                    onClick={() => {
                        setToggleModal("");
                    }}
                />
            )}
            {toggleModal === "email" && (
                <AccountUpdateEmailModal
                    onClick={() => {
                        setToggleModal("");
                    }}
                />
            )}
            {toggleModal === "alternate" && (
                <AccountUpdateAlternateModal
                    onClick={() => {
                        setToggleModal("");
                    }}
                />
            )}
            {toggleModal === "gender" && (
                <AccountGenderModal
                    onClick={() => {
                        setToggleModal("");
                    }}
                />
            )}
            {toggleModal === "familyCount" && (
                <AccountFamilyCOunModal
                    onClick={() => {
                        setToggleModal("");
                    }}
                />
            )}
            {toggleModal === "weight" && (
                <AccountWeightModal
                    onClick={() => {
                        setToggleModal("");
                    }}
                />
            )}
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
