<?php
require_once(__DIR__ . '/crest.php');

$result = null;
$result = CRest::installApp();
if ($result['rest_only'] === false) :
?>

	<head>
		<script src="//api.bitrix24.com/api/v1/"></script>
		<?php if ($result['install'] == true) : ?>
			<script>
				BX24.init(function() {
					// Создание товара и сохранение его ID
					var productData = {
						NAME: "Новый товар",
						PRICE: 100,
						CURRENCY_ID: "RUB",
						VAT_ID: 2223
					};

					BX24.callMethod("crm.product.add", productData, function(result) {
						if (result.error()) {
							console.error("Ошибка при создании товара:", result.error());
						} else {
							var productId = result.data();
							console.log("Товар создан, ID:", productId);

							// Сохраняем ID товара в параметрах приложения
							BX24.callMethod("app.option.set", {
								"option": "created_product_id",
								"value": productId
							}, function(result) {
								if (result.error()) {
									console.error("Ошибка при сохранении ID товара:", result.error());
								} else {
									console.log("ID товара успешно сохранен");
								}
							});
						}
					});

					BX24.installFinish();
				});
			</script>
		<?php endif; ?>
	</head>

	<body>
		<?php if ($result['install'] == true) : ?>
			installation has been finished
		<?php else : ?>
			installation error
		<?php endif; ?>
	</body>
<?php endif; ?>