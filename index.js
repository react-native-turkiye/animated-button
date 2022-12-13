
import React, { useState, useEffect, useRef } from 'react';
import { Text, TouchableWithoutFeedback, View, Animated, Easing } from "react-native"
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types'

import styles from './styles';

const AnimatedButton = (props) => {
    const [isOpened, setIsOpened] = useState(false);
    const rotateValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(rotateValue, {
            toValue: isOpened ? 1 : 0,
            duration: 300,
            easing: Easing.bezier(0.4, 0, 0.2, 1),
            useNativeDriver: true,
        }).start();
    }, [isOpened]);

    const rotateContainer = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['-90deg', '0deg'],
    });

    const rotateCircule = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '45deg'],
    });

    const onPress = press => {
        setIsOpened(!isOpened);
        setTimeout(press, 300);
    }

    return (
        <TouchableWithoutFeedback onPress={() => setIsOpened(false)}>
            <Animated.View style={[styles.container, isOpened && styles.fullScreen ]}>
                <Animated.View style={[styles.buttonContainer, {bottom: props.bottom, right: props.right, transform: [{ rotate: rotateContainer }]}]}>
                    <TouchableWithoutFeedback onPress={() => setIsOpened(!isOpened)}>
                        <Animated.View style={[styles.button, styles.buttonCircle, {backgroundColor: props.mainButtonColor, transform: [{ rotate: rotateCircule }]}]}>
                            <Svg width="24" height="24" viewBox="0 0 192 192" fill="none">
                                <Path d="M8 96H184" stroke={props.iconColor} strokeWidth="27" strokeLinecap="round" strokeLinejoin="round" />
                                <Path d="M96 8V184" stroke={props.iconColor} strokeWidth="27" strokeLinecap="round" strokeLinejoin="round" />
                            </Svg>
                        </Animated.View>
                    </TouchableWithoutFeedback>
                    {
                        props.buttonList?.map((item, index, arr) => 
                            <TouchableWithoutFeedback key={index} onPress={() => onPress(item.onPress)}>
                                <Animated.View style={[styles.button, { bottom: 78 + (arr.length - index - 1) * 66, opacity: rotateValue }]}>
                                    <View style={[styles.buttonCircle,{ backgroundColor: item.color || 'red' }]}>
                                        {
                                            item.icon || <Text style={styles.textIcon}>{item?.text?.[0] || '-'}</Text>
                                        }
                                    </View>
                                    {
                                        item?.text &&
                                        <View style={styles.textContainer}>
                                            <Text style={[styles.text]}>{item?.text}</Text>
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
    buttonList: PropTypes.array
};

AnimatedButton.defaultProps = {
    mainButtonColor: 'red',
    iconColor: '#fefefe',
    bottom: 24,
    right: 24,
    buttonList: []
  }

export default AnimatedButton;