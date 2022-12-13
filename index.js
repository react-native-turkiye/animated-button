
import React, { useState, useEffect, useRef } from 'react';
import { Text, TouchableWithoutFeedback, View, Animated, Easing } from "react-native"
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types'

import styles from './styles';

const AnimatedButton = (props) => {
    const [isOpened, setIsOpened] = useState(false);
    const spinValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(spinValue, {
            toValue: isOpened ? 1 : 0,
            duration: 300,
            easing: Easing.bezier(0.4, 0, 0.2, 1),
            useNativeDriver: false,
        }).start();
    }, [isOpened]);

    const rotateContainer = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: [props.spin ? '-90deg' : '0deg', '0deg'],
    });

    const rotateCircule = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '45deg'],
    });

    const high = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 66],
    });

    const backgroundColor = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.3)'],
    });

    const onPress = press => {
        setIsOpened(!isOpened);
        setTimeout(press, 300);
    }

    return (
        <TouchableWithoutFeedback onPress={() => setIsOpened(false)}>
            <Animated.View style={[styles.container, isOpened && styles.fullScreen, { backgroundColor } ]}>
                <Animated.View style={[styles.buttonContainer, {bottom: props.bottom, right: props.right, transform: [{ rotate: rotateContainer }]}]}>
                    <TouchableWithoutFeedback onPress={() => setIsOpened(!isOpened)}>
                        <Animated.View style={[styles.button, styles.buttonCircle, {zIndex: 102, backgroundColor: props.mainButtonColor, transform: [{ rotate: rotateCircule }]}]}>
                            <Svg width="24" height="24" viewBox="0 0 192 192" fill="none">
                                <Path d="M8 96H184" stroke={props.iconColor} strokeWidth="27" strokeLinecap="round" strokeLinejoin="round" />
                                <Path d="M96 8V184" stroke={props.iconColor} strokeWidth="27" strokeLinecap="round" strokeLinejoin="round" />
                            </Svg>
                        </Animated.View>
                    </TouchableWithoutFeedback>
                    {
                        props.buttonList?.map((item, index, arr) => 
                            <TouchableWithoutFeedback key={index} onPress={() => onPress(item.onPress)}>
                                <Animated.View style={[
                                        styles.button,
                                        {
                                            marginBottom: high,
                                            bottom:  78 + (arr.length - index - 2) * 66,
                                            opacity: spinValue
                                        }]}>
                                    <View style={[styles.buttonCircle, { backgroundColor: item.backgroundColor || 'red' }]}>
                                        {
                                            item.icon || <Text style={styles.textIcon}>{item?.text?.[0] || '-'}</Text>
                                        }
                                    </View>
                                    {
                                        item?.text &&
                                        <View style={[styles.textContainer, item?.textContainerStyle]}>
                                            <Text style={[styles.text, item.textStyle]}>{item?.text}</Text>
                                        </View>
                                    }
                                </Animated.View>
                            </TouchableWithoutFeedback>
                        )
                    }
                </Animated.View>
            </Animated.View>
        </TouchableWithoutFeedback>
    )
};

AnimatedButton.propTypes = {
    mainButtonColor: PropTypes.string,
    iconColor: PropTypes.string,
    bottom: PropTypes.number,
    right: PropTypes.number,
    buttonList: PropTypes.array,
    spin: PropTypes.bool
};

AnimatedButton.defaultProps = {
    mainButtonColor: 'red',
    iconColor: '#fefefe',
    bottom: 24,
    right: 24,
    buttonList: [],
    spin: false
  }

export default AnimatedButton;