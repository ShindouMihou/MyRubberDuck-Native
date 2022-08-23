<div align=center>
  <img src="https://raw.githubusercontent.com/ShindouMihou/MyRubberDuck/master/static/rubbery_duck.png" align="center"/>
</div>

#

### 📱 Native 

[My Rubber Duck 🦆 Native](https://github.com/ShindouMihou/MyRubberDuck-Native) is the mobile native variant of [My Rubber Duck 🦆](https://rubberduck.mihou.pw) which utilizes the power of React Native to produce a 
feature-ful and clean version of the platform. Unlike the web version, the native platform has more and lacks a bit of features.

#### 📖 Newly Supported Features
- [x] Import and Exporting
- [x] Homepage
- [x] Prompts before clearing and importing of messages.

#### 📖 Unsupported Features
- [ ] Syntax Highlighting

Albeit the missing features, the native platform offers a seamless experience with mobile users. Per specifications, the application stores all the data 
on your devices and requires no permission to install. You are free to export and import other people's or device's data as long as you are given the 
import data from the export feature.

You may notice quite some differences especially with how the markdown are rendered, there are no plans to solve those differences so far as they tend to 
be minor but feel free to send a pull request or an issue for any major differences between the two versions that you dislike.

#### 📦 Installation

You can find the installations of [My Rubber Duck 🦆 Native](https://github.com/ShindouMihou/MyRubberDuck-Native) under the [`releases`](https://github.com/ShindouMihou/MyRubberDuck-Native/releases) 
page where we regularly and manually create signed releases for each new version of the application.

Currently, there are platforms that the application is not available due to limitations such as not being able to test the application or compile the application 
in those platforms, the current supported platforms are:
- [x] Android
- [ ] iOS

### 🤔 Top text-bar layout?

The top text-bar layout is inherited from the web version which stems from an issue where the virtual keyboard of mobile devices would cause the text-bar to 
vanish and also indirectly create content layout shifts which breaks the application. As a result, the text-bar is located at the top.
