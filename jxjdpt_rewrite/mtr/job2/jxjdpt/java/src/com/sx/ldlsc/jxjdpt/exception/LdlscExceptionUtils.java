package com.sx.ldlsc.jxjdpt.exception;

import java.util.HashMap;
import java.util.Map;

import com.sx.utility.StringTools;

public class LdlscExceptionUtils {

	private static Map errorCodeMap = new HashMap();

	private static String[][] exceptionErrorCode = {
			{ "AnnotationTypeMismatchException", "X001" },
			{ "ArithmeticException", "X002" },
			{ "ArrayStoreException", "X003" },
			{ "BufferOverflowException", "X004" },
			{ "BufferUnderflowException", "X005" },
			{ "CannotRedoException", "X006" },
			{ "CannotUndoException", "X007" },
			{ "ClassCastException", "X008" }, { "CMMException", "X009" },
			{ "ConcurrentModificationException", "X010" },
			{ "DOMException", "X011" }, { "EmptyStackException", "X012" },
			{ "EnumConstantNotPresentException", "X013" },
			{ "EventException", "X014" },
			{ "IllegalArgumentException", "X015" },
			{ "IllegalMonitorStateException", "X016" },
			{ "IllegalPathStateException", "X017" },
			{ "IllegalStateException", "X018" },
			{ "ImagingOpException", "X019" },
			{ "IncompleteAnnotationException", "X020" },
			{ "IndexOutOfBoundsException", "X021" },
			{ "JMRuntimeException", "X022" }, { "LSException", "X023" },
			{ "MalformedParameterizedTypeException", "X024" },
			{ "MirroredTypeException", "X025" },
			{ "MirroredTypesException", "X026" },
			{ "MissingResourceException", "X027" },
			{ "NegativeArraySizeException", "X028" },
			{ "NoSuchElementException", "X029" },
			{ "NoSuchMechanismException", "X030" },
			{ "NullPointerException", "X031" },
			{ "ProfileDataException", "X032" },
			{ "ProviderException", "X033" },
			{ "RasterFormatException", "X034" },
			{ "RejectedExecutionException", "X035" },
			{ "SecurityException", "X036" }, { "SystemException", "X037" },
			{ "TypeConstraintException", "X038" },
			{ "TypeNotPresentException", "X039" },
			{ "UndeclaredThrowableException", "X040" },
			{ "UnknownAnnotationValueException", "X041" },
			{ "UnknownElementException", "X042" },
			{ "UnknownTypeException", "X043" },
			{ "UnmodifiableSetException", "X044" },
			{ "UnsupportedOperationException", "X045" },
			{ "WebServiceException ", "X046" }, { "DbException", "X100" },
			{ "AppException", "X101" }, { "AclNotFoundException", "X102" },
			{ "ActivationException", "X103" },
			{ "AlreadyBoundException", "X104" },
			{ "ApplicationException", "X105" }, { "AWTException", "X106" },
			{ "BackingStoreException", "X107" },
			{ "BadAttributeValueExpException", "X108" },
			{ "BadBinaryOpValueExpException", "X109" },
			{ "BadLocationException", "X110" },
			{ "BadStringOperationException", "X111" },
			{ "BrokenBarrierException", "X112" },
			{ "CertificateException", "X113" },
			{ "ClassNotFoundException", "X114" },
			{ "CloneNotSupportedException", "X115" },
			{ "DataFormatException", "X116" },
			{ "DatatypeConfigurationException", "X117" },
			{ "DestroyFailedException", "X118" },
			{ "ExecutionException", "X119" },
			{ "ExpandVetoException", "X120" },
			{ "FontFormatException", "X121" },
			{ "GeneralSecurityException", "X122" }, { "GSSException", "X123" },
			{ "IllegalAccessException", "X124" },
			{ "IllegalClassFormatException", "X125" },
			{ "InstantiationException", "X126" },
			{ "InterruptedException", "X127" },
			{ "IntrospectionException", "X128" },
			{ "InvalidApplicationException", "X129" },
			{ "InvalidMidiDataException", "X130" },
			{ "InvalidPreferencesFormatException", "X131" },
			{ "InvalidTargetObjectTypeException", "X132" },
			{ "InvocationTargetException", "X133" }, { "IOException", "X134" },
			{ "JAXBException", "X135" }, { "JMException", "X136" },
			{ "KeySelectorException", "X137" },
			{ "LastOwnerException", "X138" },
			{ "LineUnavailableException", "X139" },
			{ "MarshalException", "X140" },
			{ "MidiUnavailableException", "X141" },
			{ "MimeTypeParseException", "X142" },
			{ "MimeTypeParseException", "X143" },
			{ "NamingException", "X144" },
			{ "NoninvertibleTransformException", "X145" },
			{ "NoSuchFieldException", "X146" },
			{ "NoSuchMethodException", "X147" },
			{ "NotBoundException", "X148" }, { "NotOwnerException", "X149" },
			{ "ParseException", "X150" },
			{ "ParserConfigurationException", "X151" },
			{ "PrinterException", "X152" }, { "PrintException", "X153" },
			{ "PrivilegedActionException", "X154" },
			{ "PropertyVetoException", "X155" },
			{ "RefreshFailedException", "X156" },
			{ "RemarshalException", "X157" }, { "RuntimeException", "X158" },
			{ "SAXException", "X159" }, { "ScriptException", "X160" },
			{ "ServerNotActiveException", "X161" },
			{ "SOAPException", "X162" }, { "SQLException", "X163" },
			{ "TimeoutException", "X164" },
			{ "TooManyListenersException", "X165" },
			{ "TransformerException", "X166" },
			{ "TransformException", "X167" },
			{ "UnmodifiableClassException", "X168" },
			{ "UnsupportedAudioFileException", "X169" },
			{ "UnsupportedCallbackException", "X170" },
			{ "UnsupportedFlavorException", "X171" },
			{ "UnsupportedLookAndFeelException", "X172" },
			{ "URIReferenceException", "X173" },
			{ "URISyntaxException", "X174" }, { "UserException", "X175" },
			{ "XAException", "X176" }, { "XMLParseException", "X177" },
			{ "XMLSignatureException", "X178" },
			{ "XMLStreamException", "X179" }, { "XPathException", "X180" },
			{ "ModuleException ", "X181" } };

	static {
		for (int i = 0; i < exceptionErrorCode.length; i++) {
			errorCodeMap.put(exceptionErrorCode[i][0].toLowerCase(),
					exceptionErrorCode[i][1]);
		}
	}

	private static Throwable getCause(Throwable e) {
		if (null != e.getCause()) {
			return getCause(e.getCause());
		}
		return e;
	}

	private static String getExceptionName(Throwable e) {
		return getCause(e).getClass().getName();
	}

	public static LdlscErrorCode getExceptionErrorCode(Throwable e) {
		return new LdlscErrorCode(LdlscErrorCode.EXCEP, getExceptionName(e), "");
	}

	public static String getErrorCode(String str) {
		int n = str.lastIndexOf(".");
		if (str.length() > n) {
			str = str.substring(n + 1);
		}
		return StringTools.toTrim((String) errorCodeMap.get(str.toLowerCase()));
	}

	public static String getErrorCode(Throwable e) {
		return getErrorCode(getExceptionName(e));
	}
}
