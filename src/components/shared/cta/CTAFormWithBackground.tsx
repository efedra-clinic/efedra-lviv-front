"use client";

import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { fadeInAnimation } from "@/utils/animationVariants";
import Container from "../container/Container";
import CallBackForm from "../forms/CallBackForm";
import NotificationPopUp from "../notifications/NotificationPopUp";
import Backdrop from "../backdrop/Backdrop";
import { createPortal } from "react-dom";

interface CTAFormWithBackgroundProps {
    image: string;
    className?: string;
    imageClassName?: string;
}

export default function CTAFormWithBackground({
    image,
    className = "",
    imageClassName = "",
}: CTAFormWithBackgroundProps) {
    const [isNotificationShown, setIsNotificationShown] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    return (
        <section className={className}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                exit="exit"
                variants={fadeInAnimation({ scale: 0.95, duration: 1.2 })}
                className={twMerge(
                    "md:hidden relative w-full text-white rounded-[20px] h-auto flex flex-col pt-[30px] pb-11 overflow-hidden "
                )}
            >
                <Image
                    src={image}
                    alt="cta background"
                    fill
                    className={twMerge(
                        "object-cover object-[center_-27px] xs:object-center scale-[108%] xs:scale-none",
                        imageClassName
                    )}
                />

                <Container className="w-full">
                    <div className="relative z-10 flex flex-col items-center gap-[112px] w-full">
                        <motion.p
                            variants={fadeInAnimation({ y: 30, delay: 0.3 })}
                            className="text-[24px] uppercase text-center leading-[134%] xs:max-w-[378px]"
                        >
                            Бажаєте познайомитися з нашим центром особисто?
                        </motion.p>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInAnimation({ y: 30, delay: 0.3 })}
                            className="rounded-[16px] bg-white py-[35px] px-[18px] w-full max-w-[500px]"
                        >
                            <CallBackForm
                                setIsError={setIsError}
                                setIsNotificationShown={setIsNotificationShown}
                                className="text-black"
                            />
                        </motion.div>
                    </div>
                </Container>
            </motion.div>

            <Container>
                <div className="hidden md:flex gap-4 lg:gap-5">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInAnimation({
                            scale: 0.95,
                            duration: 1.2,
                        })}
                        className="relative w-[calc(100%)] lg:w-[calc(100%+30px)] h-auto rounded-[20px]  overflow-hidden"
                    >
                        <Image
                            src={image}
                            alt="cta background"
                            fill
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInAnimation({ y: 30, delay: 0.3 })}
                        className="flex flex-col gap-[15px] bg-gray-light-2 rounded-[20px] px-[20px] py-[30px] lg:px-[45px] lg:py-[56px]"
                    >
                        <motion.p
                            variants={fadeInAnimation({ y: 30, delay: 0.3 })}
                            className="text-[20px] lg:text-[24px] xl:text-[32px] uppercase text-center leading-[135%]"
                        >
                            Бажаєте <br /> познайомитися з нашим центром
                            особисто?
                        </motion.p>
                        <motion.div
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInAnimation({ y: 30, delay: 0.3 })}
                        >
                            <CallBackForm
                                setIsError={setIsError}
                                setIsNotificationShown={setIsNotificationShown}
                                buttonClassName="bg-green"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </Container>
            {isMounted &&
                createPortal(
                    <>
                        <Backdrop
                            isVisible={isNotificationShown}
                            onClick={() => {
                                setIsNotificationShown(false);
                            }}
                        />
                        <NotificationPopUp
                            title={
                                isError
                                    ? "На жаль, щось пішло не так"
                                    : "Дякуємо за звернення!"
                            }
                            description={
                                isError
                                    ? "Спробуйте відправити форму ще раз"
                                    : "Наш менеджер скоро зв'яжеться з вами"
                            }
                            isPopUpShown={isNotificationShown}
                            setIsPopUpShown={setIsNotificationShown}
                        />
                    </>,
                    document.body
                )}
        </section>
    );
}
