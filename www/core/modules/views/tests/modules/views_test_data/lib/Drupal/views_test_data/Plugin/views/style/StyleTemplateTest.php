<?php

/**
 * @file
 * Definition of Drupal\views_test_data\Plugin\views\style\StyleTemplateTest.
 */

namespace Drupal\views_test_data\Plugin\views\style;

use Drupal\views\Annotation\ViewsStyle;
use Drupal\Core\Annotation\Translation;
use Drupal\views\Plugin\views\style\StylePluginBase;

/**
 * Provides a general test style template plugin.
 *
 * @ingroup views_style_plugins
 *
 * @ViewsStyle(
 *   id = "test_template_style",
 *   module = "views_test_data",
 *   title = @Translation("Test style template plugin"),
 *   help = @Translation("Provides a generic style template test plugin."),
 *   theme = "views_view_style_template_test",
 *   display_types = {"normal", "test"}
 * )
 */
class StyleTemplateTest extends StylePluginBase {

  /**
   * Can the style plugin use row plugins.
   *
   * @var bool
   */
  protected $usesRowPlugin = TRUE;

}
