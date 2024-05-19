/*

 # ------------------------------------- #
 #     Design System Implementation      #
 # ------------------------------------- #

 You can implement the design systems here ,whatever changes appear here will be
 applied to entire app, you add extra or change with your own design system
 
 ⚠️ NOTE : USE STYLESHEET FROM HERE ONLY MOST CASES,IMPORT IT ANY COMPONENT OR SCREEN
           DON'T ADD ANY CUSTOM STYLES ,YOU SHOULD CREATE CUSTOM STYLES IN THEIR OWN COMPONENTS
           ADD ONLY HERE PATTERN BASED STYLES
*/

import { StyleSheet } from "react-native";

const typography = {
  lineHeights: {
    "2xs": "1em",
    xs: "1.125em",
    sm: "1.25em",
    md: "1.375em",
    lg: "1.5em",
    xl: "1.75em",
    "2xl": "2em",
    "3xl": "2.5em",
    "4xl": "3em",
    "5xl": "4em",
  },
  fontSize: {
    "2xs": 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    "2xl": 24,
    "3xl": 30,
    "4xl": 36,
    "5xl": 48,
    "6xl": 60,
    "7xl": 72,
    "8xl": 96,
    "9xl": 128,
  },
};

const sizes = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
  24: 96,
  32: 128,
  40: 160,
  48: 192,
  56: 224,
  64: 256,
  72: 288,
  80: 320,
  96: 384,
  px: 1,
  "0.5": 2,
  "1.5": 6,
  "2.5": 10,
  "3.5": 14,
  "1/2": "50%",
  "1/3": "33.333%",
  "2/3": "66.666%",
  "1/4": "25%",
  "2/4": "50%",
  "3/4": "75%",
  "1/5": "20%",
  "2/5": "40%",
  "3/5": "60%",
  "4/5": "80%",
  "1/6": "16.666%",
  "2/6": "33.333%",
  "3/6": "50%",
  "4/6": "66.666%",
  "5/6": "83.333%",
  "1/8": "12.5%",
  "2/8": "25%",
  "3/8": "37.5%",
  "4/8": "50%",
  "5/8": "62.5%",
  "6/8": "75%",
  "7/8": "87.5%",
  full: "100%",
};

export const Gstyles = StyleSheet.create({
  "text-2xs": {
    fontSize: typography.fontSize["2xs"],
  },
  "text-xs": {
    fontSize: typography.fontSize.xs,
  },
  "text-sm": {
    fontSize: typography.fontSize.sm,
  },
  "text-md": {
    fontSize: typography.fontSize.md,
  },
  "text-lg": {
    fontSize: typography.fontSize.lg,
  },
  "text-xl": {
    fontSize: typography.fontSize.xl,
  },
  "text-2xl": {
    fontSize: typography.fontSize["2xl"],
  },
  "text-3xl": {
    fontSize: typography.fontSize["3xl"],
  },
  "text-4xl": {
    fontSize: typography.fontSize["4xl"],
  },
  "text-5xl": {
    fontSize: typography.fontSize["5xl"],
  },
  "text-6xl": {
    fontSize: typography.fontSize["6xl"],
  },
  "text-7xl": {
    fontSize: typography.fontSize["7xl"],
  },
  "text-8xl": {
    fontSize: typography.fontSize["8xl"],
  },
  "text-9xl": {
    fontSize: typography.fontSize["9xl"],
  },
  // font weights
  "font-hairline": {
    fontWeight: "100",
  },
  "font-thin": {
    fontWeight: "200",
  },
  "font-light": {
    fontWeight: "300",
  },
  "font-normal": {
    fontWeight: "400",
  },
  "font-medium": {
    fontWeight: "500",
  },
  "font-semibold": {
    fontWeight: "600",
  },
  "font-bold": {
    fontWeight: "700",
  },
  "font-extrabold": {
    fontWeight: "800",
  },
  "font-black": {
    fontWeight: "900",
  },
  // Custom Layout definitions for the containers and wrappers added
  // most common patterns you can add more here as project basis
  "flex-row-xy-center": {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  "flex-row-x-center": {
    flexDirection: "row",
    alignItems: "center",
  },
  "flex-row-y-center": {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  "flex-row-wrap-content": {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  "flex-row-y-between": {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  "flex-row-y-evenly": {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  "xy-center": {
    alignItems: "center",
    justifyContent: "center",
  },
  absolute: {
    position: "absolute",
  },
  relative: {
    position: "relative",
  },
  // you can add more based on requirements

  // padding horizontal
  // Padding Horizontal
  "px-0": {
    paddingHorizontal: sizes[0],
  },
  "px-1": {
    paddingHorizontal: sizes[1],
  },
  "px-2": {
    paddingHorizontal: sizes[2],
  },
  "px-3": {
    paddingHorizontal: sizes[3],
  },
  "px-4": {
    paddingHorizontal: sizes[4],
  },
  "px-5": {
    paddingHorizontal: sizes[5],
  },
  "px-6": {
    paddingHorizontal: sizes[6],
  },
  "px-7": {
    paddingHorizontal: sizes[7],
  },
  "px-8": {
    paddingHorizontal: sizes[8],
  },
  "px-9": {
    paddingHorizontal: sizes[9],
  },
  "px-10": {
    paddingHorizontal: sizes[10],
  },
  "px-12": {
    paddingHorizontal: sizes[12],
  },
  "px-16": {
    paddingHorizontal: sizes[16],
  },
  "px-20": {
    paddingHorizontal: sizes[20],
  },
  "px-24": {
    paddingHorizontal: sizes[24],
  },
  "px-32": {
    paddingHorizontal: sizes[32],
  },

  // Padding Vertical
  "py-0": {
    paddingVertical: sizes[0],
  },
  "py-1": {
    paddingVertical: sizes[1],
  },
  "py-2": {
    paddingVertical: sizes[2],
  },
  "py-3": {
    paddingVertical: sizes[3],
  },
  "py-4": {
    paddingVertical: sizes[4],
  },
  "py-5": {
    paddingVertical: sizes[5],
  },
  "py-6": {
    paddingVertical: sizes[6],
  },
  "py-7": {
    paddingVertical: sizes[7],
  },
  "py-8": {
    paddingVertical: sizes[8],
  },
  "py-9": {
    paddingVertical: sizes[9],
  },
  "py-10": {
    paddingVertical: sizes[10],
  },
  "py-12": {
    paddingVertical: sizes[12],
  },
  "py-16": {
    paddingVertical: sizes[16],
  },
  "py-20": {
    paddingVertical: sizes[20],
  },
  "py-24": {
    paddingVertical: sizes[24],
  },
  "py-32": {
    paddingVertical: sizes[32],
  },

  // Padding Top
  "pt-0": {
    paddingTop: sizes[0],
  },
  "pt-1": {
    paddingTop: sizes[1],
  },
  "pt-2": {
    paddingTop: sizes[2],
  },
  "pt-3": {
    paddingTop: sizes[3],
  },
  "pt-4": {
    paddingTop: sizes[4],
  },
  "pt-5": {
    paddingTop: sizes[5],
  },
  "pt-6": {
    paddingTop: sizes[6],
  },
  "pt-7": {
    paddingTop: sizes[7],
  },
  "pt-8": {
    paddingTop: sizes[8],
  },
  "pt-9": {
    paddingTop: sizes[9],
  },
  "pt-10": {
    paddingTop: sizes[10],
  },
  "pt-12": {
    paddingTop: sizes[12],
  },
  "pt-16": {
    paddingTop: sizes[16],
  },
  "pt-20": {
    paddingTop: sizes[20],
  },
  "pt-24": {
    paddingTop: sizes[24],
  },
  "pt-32": {
    paddingTop: sizes[32],
  },

  // Padding Left
  "pl-0": {
    paddingLeft: sizes[0],
  },
  "pl-1": {
    paddingLeft: sizes[1],
  },
  "pl-2": {
    paddingLeft: sizes[2],
  },
  "pl-3": {
    paddingLeft: sizes[3],
  },
  "pl-4": {
    paddingLeft: sizes[4],
  },
  "pl-5": {
    paddingLeft: sizes[5],
  },
  "pl-6": {
    paddingLeft: sizes[6],
  },
  "pl-7": {
    paddingLeft: sizes[7],
  },
  "pl-8": {
    paddingLeft: sizes[8],
  },
  "pl-9": {
    paddingLeft: sizes[9],
  },
  "pl-10": {
    paddingLeft: sizes[10],
  },
  "pl-12": {
    paddingLeft: sizes[12],
  },
  "pl-16": {
    paddingLeft: sizes[16],
  },
  "pl-20": {
    paddingLeft: sizes[20],
  },
  "pl-24": {
    paddingLeft: sizes[24],
  },
  "pl-32": {
    paddingLeft: sizes[32],
  },

  // Padding Right
  "pr-0": {
    paddingRight: sizes[0],
  },
  "pr-1": {
    paddingRight: sizes[1],
  },
  "pr-2": {
    paddingRight: sizes[2],
  },
  "pr-3": {
    paddingRight: sizes[3],
  },
  "pr-4": {
    paddingRight: sizes[4],
  },
  "pr-5": {
    paddingRight: sizes[5],
  },
  "pr-6": {
    paddingRight: sizes[6],
  },
  "pr-7": {
    paddingRight: sizes[7],
  },
  "pr-8": {
    paddingRight: sizes[8],
  },
  "pr-9": {
    paddingRight: sizes[9],
  },
  "pr-10": {
    paddingRight: sizes[10],
  },
  "pr-12": {
    paddingRight: sizes[12],
  },
  "pr-16": {
    paddingRight: sizes[16],
  },
  "pr-20": {
    paddingRight: sizes[20],
  },
  "pr-24": {
    paddingRight: sizes[24],
  },
  "pr-32": {
    paddingRight: sizes[32],
  },

  // Padding Bottom
  "pb-0": {
    paddingBottom: sizes[0],
  },
  "pb-1": {
    paddingBottom: sizes[1],
  },
  "pb-2": {
    paddingBottom: sizes[2],
  },
  "pb-3": {
    paddingBottom: sizes[3],
  },
  "pb-4": {
    paddingBottom: sizes[4],
  },
  "pb-5": {
    paddingBottom: sizes[5],
  },
  "pb-6": {
    paddingBottom: sizes[6],
  },
  "pb-7": {
    paddingBottom: sizes[7],
  },
  "pb-8": {
    paddingBottom: sizes[8],
  },
  "pb-9": {
    paddingBottom: sizes[9],
  },
  "pb-10": {
    paddingBottom: sizes[10],
  },
  "pb-12": {
    paddingBottom: sizes[12],
  },
  "pb-16": {
    paddingBottom: sizes[16],
  },
  "pb-20": {
    paddingBottom: sizes[20],
  },
  "pb-24": {
    paddingBottom: sizes[24],
  },
  "pb-32": {
    paddingBottom: sizes[32],
  },
  // Margin Horizontal
  "mx-0": {
    marginHorizontal: sizes[0],
  },
  "mx-1": {
    marginHorizontal: sizes[1],
  },
  "mx-2": {
    marginHorizontal: sizes[2],
  },
  "mx-3": {
    marginHorizontal: sizes[3],
  },
  "mx-4": {
    marginHorizontal: sizes[4],
  },
  "mx-5": {
    marginHorizontal: sizes[5],
  },
  "mx-6": {
    marginHorizontal: sizes[6],
  },
  "mx-7": {
    marginHorizontal: sizes[7],
  },
  "mx-8": {
    marginHorizontal: sizes[8],
  },
  "mx-9": {
    marginHorizontal: sizes[9],
  },
  "mx-10": {
    marginHorizontal: sizes[10],
  },
  "mx-12": {
    marginHorizontal: sizes[12],
  },
  "mx-16": {
    marginHorizontal: sizes[16],
  },
  "mx-20": {
    marginHorizontal: sizes[20],
  },
  "mx-24": {
    marginHorizontal: sizes[24],
  },
  "mx-32": {
    marginHorizontal: sizes[32],
  },
  // Add more as needed for other values

  // Margin Vertical
  "my-0": {
    marginVertical: sizes[0],
  },
  "my-1": {
    marginVertical: sizes[1],
  },
  "my-2": {
    marginVertical: sizes[2],
  },
  "my-3": {
    marginVertical: sizes[3],
  },
  "my-4": {
    marginVertical: sizes[4],
  },
  "my-5": {
    marginVertical: sizes[5],
  },
  "my-6": {
    marginVertical: sizes[6],
  },
  "my-7": {
    marginVertical: sizes[7],
  },
  "my-8": {
    marginVertical: sizes[8],
  },
  "my-9": {
    marginVertical: sizes[9],
  },
  "my-10": {
    marginVertical: sizes[10],
  },
  "my-12": {
    marginVertical: sizes[12],
  },
  "my-16": {
    marginVertical: sizes[16],
  },
  "my-20": {
    marginVertical: sizes[20],
  },
  "my-24": {
    marginVertical: sizes[24],
  },
  "my-32": {
    marginVertical: sizes[32],
  },
  // Add more as needed for other values

  // Margin Top
  "mt-0": {
    marginTop: sizes[0],
  },
  "mt-1": {
    marginTop: sizes[1],
  },
  "mt-2": {
    marginTop: sizes[2],
  },
  "mt-3": {
    marginTop: sizes[3],
  },
  "mt-4": {
    marginTop: sizes[4],
  },
  "mt-5": {
    marginTop: sizes[5],
  },
  "mt-6": {
    marginTop: sizes[6],
  },
  "mt-7": {
    marginTop: sizes[7],
  },
  "mt-8": {
    marginTop: sizes[8],
  },
  "mt-9": {
    marginTop: sizes[9],
  },
  "mt-10": {
    marginTop: sizes[10],
  },
  "mt-12": {
    marginTop: sizes[12],
  },
  "mt-16": {
    marginTop: sizes[16],
  },
  "mt-20": {
    marginTop: sizes[20],
  },
  "mt-24": {
    marginTop: sizes[24],
  },
  "mt-32": {
    marginTop: sizes[32],
  },
  // Add more as needed for other values

  // Margin Left
  "ml-0": {
    marginLeft: sizes[0],
  },
  "ml-1": {
    marginLeft: sizes[1],
  },
  "ml-2": {
    marginLeft: sizes[2],
  },
  "ml-3": {
    marginLeft: sizes[3],
  },
  "ml-4": {
    marginLeft: sizes[4],
  },
  "ml-5": {
    marginLeft: sizes[5],
  },
  "ml-6": {
    marginLeft: sizes[6],
  },
  "ml-7": {
    marginLeft: sizes[7],
  },
  "ml-8": {
    marginLeft: sizes[8],
  },
  "ml-9": {
    marginLeft: sizes[9],
  },
  "ml-10": {
    marginLeft: sizes[10],
  },
  "ml-12": {
    marginLeft: sizes[12],
  },
  "ml-16": {
    marginLeft: sizes[16],
  },
  "ml-20": {
    marginLeft: sizes[20],
  },
  "ml-24": {
    marginLeft: sizes[24],
  },
  "ml-32": {
    marginLeft: sizes[32],
  },
  // Add more as needed for other values

  // Margin Right
  "mr-0": {
    marginRight: sizes[0],
  },
  "mr-1": {
    marginRight: sizes[1],
  },
  "mr-2": {
    marginRight: sizes[2],
  },
  "mr-3": {
    marginRight: sizes[3],
  },
  "mr-4": {
    marginRight: sizes[4],
  },
  "mr-5": {
    marginRight: sizes[5],
  },
  "mr-6": {
    marginRight: sizes[6],
  },
  "mr-7": {
    marginRight: sizes[7],
  },
  "mr-8": {
    marginRight: sizes[8],
  },
  "mr-9": {
    marginRight: sizes[9],
  },
  "mr-10": {
    marginRight: sizes[10],
  },
  "mr-12": {
    marginRight: sizes[12],
  },
  "mr-16": {
    marginRight: sizes[16],
  },
  "mr-20": {
    marginRight: sizes[20],
  },
  "mr-24": {
    marginRight: sizes[24],
  },
  "mr-32": {
    marginRight: sizes[32],
  },
  // Add more as needed for other values

  // Margin Bottom
  "mb-0": {
    marginBottom: sizes[0],
  },
  "mb-1": {
    marginBottom: sizes[1],
  },
  "mb-2": {
    marginBottom: sizes[2],
  },
  "mb-3": {
    marginBottom: sizes[3],
  },
  "mb-4": {
    marginBottom: sizes[4],
  },
  "mb-5": {
    marginBottom: sizes[5],
  },
  "mb-6": {
    marginBottom: sizes[6],
  },
  "mb-7": {
    marginBottom: sizes[7],
  },
  "mb-8": {
    marginBottom: sizes[8],
  },
  "mb-9": {
    marginBottom: sizes[9],
  },
  "mb-10": {
    marginBottom: sizes[10],
  },
  "mb-12": {
    marginBottom: sizes[12],
  },
  "mb-16": {
    marginBottom: sizes[16],
  },
  "mb-20": {
    marginBottom: sizes[20],
  },
  "mb-24": {
    marginBottom: sizes[24],
  },
  "mb-32": {
    marginBottom: sizes[32],
  },
  // Add more as you needed on basis
  // Border radius border all , topleft ,topright, bottomleft and bottomright
  "rounded-none": {
    borderRadius: 0,
  },
  "rounded-sm": {
    borderRadius: 4,
  },
  "rounded-md": {
    borderRadius: 8,
  },
  "rounded-lg": {
    borderRadius: 12,
  },
  "rounded-xl": {
    borderRadius: 16,
  },
  "rounded-2xl": {
    borderRadius: 20,
  },
  "rounded-3xl": {
    borderRadius: 24,
  },
  "rounded-4xl": {
    borderRadius: 32,
  },
  "rounded-full": {
    borderRadius: 9999, // Large value to achieve a circle (commonly used for avatar images)
  },
  "rounded-tl-none": {
    borderTopLeftRadius: 0,
  },
  "rounded-tr-none": {
    borderTopRightRadius: 0,
  },
  "rounded-bl-none": {
    borderBottomLeftRadius: 0,
  },
  "rounded-br-none": {
    borderBottomRightRadius: 0,
  },
  "rounded-tl-sm": {
    borderTopLeftRadius: 4,
  },
  "rounded-tr-sm": {
    borderTopRightRadius: 4,
  },
  "rounded-bl-sm": {
    borderBottomLeftRadius: 4,
  },
  "rounded-br-sm": {
    borderBottomRightRadius: 4,
  },
  "rounded-tl-md": {
    borderTopLeftRadius: 8,
  },
  "rounded-tr-md": {
    borderTopRightRadius: 8,
  },
  "rounded-bl-md": {
    borderBottomLeftRadius: 8,
  },
  "rounded-br-md": {
    borderBottomRightRadius: 8,
  },
  "rounded-tl-lg": {
    borderTopLeftRadius: 12,
  },
  "rounded-tr-lg": {
    borderTopRightRadius: 12,
  },
  "rounded-bl-lg": {
    borderBottomLeftRadius: 12,
  },
  "rounded-br-lg": {
    borderBottomRightRadius: 12,
  },
  "rounded-tl-xl": {
    borderTopLeftRadius: 16,
  },
  "rounded-tr-xl": {
    borderTopRightRadius: 16,
  },
  "rounded-bl-xl": {
    borderBottomLeftRadius: 16,
  },
  "rounded-br-xl": {
    borderBottomRightRadius: 16,
  },
  "rounded-tl-2xl": {
    borderTopLeftRadius: 20,
  },
  "rounded-tr-2xl": {
    borderTopRightRadius: 20,
  },
  "rounded-bl-2xl": {
    borderBottomLeftRadius: 20,
  },
  "rounded-br-2xl": {
    borderBottomRightRadius: 20,
  },
  "rounded-tl-3xl": {
    borderTopLeftRadius: 24,
  },
  "rounded-tr-3xl": {
    borderTopRightRadius: 24,
  },
  "rounded-bl-3xl": {
    borderBottomLeftRadius: 24,
  },
  "rounded-br-3xl": {
    borderBottomRightRadius: 24,
  },
  "rounded-tl-4xl": {
    borderTopLeftRadius: 32,
  },
  "rounded-tr-4xl": {
    borderTopRightRadius: 32,
  },
  "rounded-bl-4xl": {
    borderBottomLeftRadius: 32,
  },
  "rounded-br-4xl": {
    borderBottomRightRadius: 32,
  },
});
